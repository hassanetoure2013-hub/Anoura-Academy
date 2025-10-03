export interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: string;
  price: number;
  image: string;
  instructor: string;
  rating: number;
  students: number;
  modules: string[];
  features: string[];
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Marchés Publics en Afrique de l'Ouest",
    description: "Formation complète sur les procédures de marchés publics dans les pays de la CEDEAO",
    duration: "6 semaines",
    level: "Intermédiaire",
    price: 299,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    instructor: "Dr. Aminata Traoré",
    rating: 4.8,
    students: 245,
    modules: [
      "Cadre juridique CEDEAO",
      "Procédures d'appel d'offres",
      "Évaluation des offres",
      "Gestion des contrats"
    ],
    features: [
      "Certificat reconnu",
      "Cas pratiques",
      "Support 24/7",
      "Accès à vie"
    ]
  },
  {
    id: 2,
    title: "PPP et Financement de Projets",
    description: "Maîtrisez les partenariats public-privé et le financement de grands projets d'infrastructure",
    duration: "8 semaines",
    level: "Avancé",
    price: 399,
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
    instructor: "Prof. Jean-Baptiste Kouame",
    rating: 4.9,
    students: 189,
    modules: [
      "Structuration de PPP",
      "Montages financiers",
      "Gestion des risques",
      "Négociation de contrats"
    ],
    features: [
      "Certificat reconnu",
      "Études de cas réels",
      "Mentorat individuel",
      "Réseau professionnel"
    ]
  },
  {
    id: 3,
    title: "Conformité et Audit des Marchés",
    description: "Apprenez les techniques d'audit et de contrôle de conformité des marchés publics",
    duration: "4 semaines",
    level: "Débutant",
    price: 199,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
    instructor: "Me. Fatou Diallo",
    rating: 4.7,
    students: 321,
    modules: [
      "Principes d'audit",
      "Détection des irrégularités",
      "Rapports d'audit",
      "Recommandations correctives"
    ],
    features: [
      "Certificat reconnu",
      "Outils d'audit",
      "Templates inclus",
      "Support expert"
    ]
  }
];

export const getDiscountedPrice = (originalPrice: number, discountPercent: number): number => {
  return Math.round(originalPrice * (1 - discountPercent / 100));
};

export const formatPrice = (price: number): string => {
  return `${price} €`;
};

export const getCourseById = (id: number): Course | undefined => {
  return courses.find(course => course.id === id);
};