import { useEffect, useState, type JSX } from "react";
import DOMPurify from "dompurify";
import { supabase } from "../lib/supabase"; // chemin relatif mis à jour

export default function PageAccueil(): JSX.Element {
  const [html, setHtml] = useState("");
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("pages")
        .select("contenu_html")
        .eq("slug", "accueil")
        .single();
      if (error) setErr(error.message);
      else setHtml(data?.contenu_html ?? "");
    })();
  }, []);

  if (err) return <p>Erreur : {err}</p>;
  if (!html) return <p>Chargement…</p>;

  const safe = DOMPurify.sanitize(html);
  return <div dangerouslySetInnerHTML={{ __html: safe }} />;
}
