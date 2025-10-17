import type { JSX } from "react";
import MGXFallback from "../components/mgx/Fallback";
import { MGX_FALLBACK_PAGES, MGX_DEFAULT_SLUG } from "../components/mgx/content";

export default function NotFound(): JSX.Element {
  const fallback = MGX_FALLBACK_PAGES[MGX_DEFAULT_SLUG];

  return (
    <MGXFallback
      content={fallback}
      notice="Page introuvable — affichage du contenu MGX par défaut."
    />
  );
}
