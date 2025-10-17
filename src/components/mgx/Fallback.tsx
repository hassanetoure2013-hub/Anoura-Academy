import type { JSX } from "react";
import type { MGXPageContent } from "./content";

interface MGXFallbackProps {
  content: MGXPageContent;
  notice?: string;
}

export default function MGXFallback({ content, notice }: MGXFallbackProps): JSX.Element {
  const { title, intro, cta, sections, footer } = content;

  return (
    <div className="mgx-page">
      <header className="mgx-hero">
        <p className="mgx-notice">{notice ?? "Contenu chargé depuis la configuration locale MGX."}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
        {cta ? (
          <a className="mgx-cta" href={cta.href}>
            {cta.label}
          </a>
        ) : null}
      </header>

      <main className="mgx-main">
        <section className="mgx-grid">
          {sections.map((section) => (
            <article className="mgx-card" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </article>
          ))}
        </section>
      </main>

      {footer ? (
        <footer className="mgx-footer" id="contact">
          &copy; {new Date().getFullYear()} {footer}
        </footer>
      ) : null}
    </div>
  );
}
