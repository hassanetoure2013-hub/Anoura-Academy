export interface MGXPageSection {
  title: string;
  description: string;
}

export interface MGXPageContent {
  title: string;
  intro: string;
  cta?: {
    label: string;
    href: string;
  };
  sections: MGXPageSection[];
  footer?: string;
}

export const MGX_FALLBACK_PAGES: Record<string, MGXPageContent> = {
  accueil: {
    title: "MGX",
    intro:
      "Découvrez l'excellence du mentoring et la puissance de la transformation digitale avec MGX. Nous accompagnons les talents et les organisations à chaque étape de leur croissance.",
    cta: { label: "Prendre rendez-vous", href: "#contact" },
    sections: [
      {
        title: "Mentorat",
        description:
          "Programmes sur mesure pour révéler le potentiel de vos équipes et accélérer leurs performances.",
      },
      {
        title: "Stratégie digitale",
        description:
          "Conception d'expériences numériques engageantes, pensées pour convertir et fidéliser vos publics.",
      },
      {
        title: "Design & branding",
        description:
          "Identité visuelle forte, cohérence de marque et storytelling magnétique pour vous démarquer durablement.",
      },
    ],
    footer: "MGX — Accompagnement premium.",
  },
  services: {
    title: "Services MGX",
    intro:
      "Nos expertises combinent stratégie, exécution et coaching pour générer un impact mesurable dans votre organisation.",
    cta: { label: "Découvrir nos offres", href: "#services" },
    sections: [
      {
        title: "Audit & Conseil",
        description:
          "Analyse approfondie de vos processus pour définir un plan d'action opérationnel, priorisé et réaliste.",
      },
      {
        title: "Accompagnement produit",
        description:
          "Développement d'offres digitales alignées sur vos objectifs business et vos indicateurs de performance.",
      },
      {
        title: "Formation continue",
        description:
          "Programmes courts et immersifs pour faire monter vos équipes en compétence sur les métiers du numérique.",
      },
    ],
    footer: "MGX — Des services pensés pour durer.",
  },
  mentoring: {
    title: "Mentorat MGX",
    intro:
      "Un accompagnement humain pour franchir des paliers décisifs et déployer votre potentiel de leader.",
    cta: { label: "Réserver une session", href: "#mentorat" },
    sections: [
      {
        title: "Coaching individuel",
        description:
          "Séances personnalisées pour clarifier vos objectifs, renforcer votre posture et accélérer vos décisions.",
      },
      {
        title: "Mentoring d'équipes",
        description:
          "Ateliers collaboratifs pour aligner vos talents, améliorer la communication et fluidifier vos projets.",
      },
      {
        title: "Programmes exécutifs",
        description:
          "Parcours intensifs pour les dirigeants et cadres qui pilotent des transformations à grande échelle.",
      },
    ],
    footer: "MGX — Libérez les talents.",
  },
  contact: {
    title: "Contact MGX",
    intro:
      "Parlez-nous de vos ambitions. Nous co-construisons des stratégies qui allient vision, rigueur et exécution.",
    cta: { label: "Écrire à MGX", href: "mailto:contact@mgx.co" },
    sections: [
      {
        title: "Nous rencontrer",
        description:
          "Sessions en présentiel ou à distance pour comprendre vos enjeux et définir les bons leviers.",
      },
      {
        title: "Partenariats",
        description:
          "MGX collabore avec des institutions publiques, des startups et des entreprises internationales.",
      },
      {
        title: "Carrières",
        description:
          "Rejoignez un collectif d'experts passionnés par la transmission et l'innovation.",
      },
    ],
    footer: "MGX — Ensemble, construisons l'avenir.",
  },
};

export const MGX_DEFAULT_SLUG = "accueil";

export const MGX_KNOWN_SLUGS = Object.keys(MGX_FALLBACK_PAGES);
