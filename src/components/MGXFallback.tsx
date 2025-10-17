import type { JSX } from "react";

export default function MGXFallback(): JSX.Element {
  return (
    <div className="mgx-page">
      <header className="mgx-hero">
        <h1>MGX</h1>
        <p>
          Découvrez l&apos;excellence du mentoring et la puissance de la transformation digitale avec MGX.
          Nous accompagnons les talents et les organisations à chaque étape de leur croissance.
        </p>
        <a className="mgx-cta" href="#contact">
          Prendre rendez-vous
        </a>
      </header>

      <main className="mgx-main">
        <section className="mgx-grid">
          <article className="mgx-card">
            <h2>Mentorat</h2>
            <p>
              Programmes sur mesure pour révéler le potentiel de vos équipes et accélérer leurs performances.
            </p>
          </article>
          <article className="mgx-card">
            <h2>Stratégie digitale</h2>
            <p>
              Conception d&apos;expériences numériques engageantes, pensées pour convertir et fidéliser vos publics.
            </p>
          </article>
          <article className="mgx-card">
            <h2>Design &amp; branding</h2>
            <p>
              Identité visuelle forte, cohérence de marque et storytelling magnétique pour vous démarquer durablement.
            </p>
          </article>
        </section>
      </main>

      <footer className="mgx-footer" id="contact">
        &copy; {new Date().getFullYear()} MGX — Accompagnement premium.
      </footer>
    </div>
  );
}
