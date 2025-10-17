import { useEffect, useState, type JSX } from "react";
import { sanitizeHtml } from "../lib/sanitize";
import MGXFallback from "../components/mgx/Fallback";
import { supabase } from "../lib/supabase";
import { MGX_FALLBACK_PAGES } from "../components/mgx/content";

interface MGXPageProps {
  slug: string;
}

// Cache client basique pour limiter les requêtes Supabase sur la session en cours.
const CACHE_TTL_MS = 5 * 60 * 1000;
const pageCache = new Map<string, { html: string; timestamp: number }>();

const getCachedContent = (slug: string): string | null => {
  const cached = pageCache.get(slug);
  if (!cached) return null;

  if (Date.now() - cached.timestamp > CACHE_TTL_MS) {
    pageCache.delete(slug);
    return null;
  }

  return cached.html;
};

export default function MGXPage({ slug }: MGXPageProps): JSX.Element {
  const normalizedSlug = slug.trim().toLowerCase();
  const fallbackContent = MGX_FALLBACK_PAGES[normalizedSlug];

  const [html, setHtml] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    let active = true;

    const loadContent = async (): Promise<void> => {
      const cachedHtml = getCachedContent(normalizedSlug);
      if (cachedHtml) {
        setHtml(cachedHtml);
        setUseFallback(false);
        setErr(null);
        return;
      }

      if (!supabase) {
        if (active) setUseFallback(true);
        return;
      }

      try {
        const { data, error } = await supabase
          .from("pages")
          .select("contenu_html")
          .eq("slug", normalizedSlug)
          .single<{ contenu_html: string | null }>();

        if (error) {
          throw new Error(error.message);
        }

        const content = data?.contenu_html;
        if (!content) {
          throw new Error("Contenu Supabase vide");
        }

        if (active) {
          setHtml(content);
          setUseFallback(false);
          setErr(null);
          pageCache.set(normalizedSlug, { html: content, timestamp: Date.now() });
        }
      } catch (dbError) {
        console.warn(`MGX (${normalizedSlug}): fallback utilisé`, dbError);
        if (active) {
          setUseFallback(true);
          setErr(null);
        }
      }
    };

    void loadContent();

    return () => {
      active = false;
    };
  }, [normalizedSlug]);

  if (!fallbackContent) {
    const message = `Page MGX inconnue : ${normalizedSlug}.`;
  const safeMessage = sanitizeHtml(message);
    return <p dangerouslySetInnerHTML={{ __html: safeMessage }} />;
  }

  if (err) {
    return <p>Erreur : {err}</p>;
  }

  if (useFallback || (!html && !supabase)) {
    return <MGXFallback content={fallbackContent} notice="Affichage du contenu local MGX." />;
  }

  if (!html) {
    return <p>Chargement…</p>;
  }

  const safe = sanitizeHtml(html);
  return <div className="mgx-html" dangerouslySetInnerHTML={{ __html: safe }} />;
}
