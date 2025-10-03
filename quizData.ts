export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
  minPassingScore: number;
  timeLimit: number; // en secondes
}

export const quizData: Record<string, Quiz[]> = {
  'initiation-marches-publics': [
    {
      id: 'quiz-module-1',
      title: 'Quiz Module 1 - Introduction aux Marchés Publics',
      description: 'Évaluez vos connaissances sur les concepts de base',
      minPassingScore: 70,
      timeLimit: 300, // 5 minutes
      questions: [
        {
          id: 'q1',
          question: 'Qu\'est-ce qu\'un marché public selon la réglementation UEMOA ?',
          options: [
            'Un contrat entre deux entreprises privées',
            'Un contrat conclu par une personne publique pour répondre à ses besoins',
            'Une vente aux enchères publiques',
            'Un accord commercial international'
          ],
          correctAnswer: 1,
          explanation: 'Un marché public est un contrat conclu par une personne publique (État, collectivité, établissement public) pour répondre à ses besoins en matière de travaux, fournitures ou services.'
        },
        {
          id: 'q2',
          question: 'Quel est le seuil minimum pour un appel d\'offres ouvert en Côte d\'Ivoire ?',
          options: [
            '5 millions FCFA',
            '15 millions FCFA',
            '50 millions FCFA',
            '100 millions FCFA'
          ],
          correctAnswer: 2,
          explanation: 'En Côte d\'Ivoire, le seuil pour un appel d\'offres ouvert est généralement de 50 millions FCFA. En dessous, d\'autres procédures peuvent être utilisées.'
        },
        {
          id: 'q3',
          question: 'Quels sont les principes fondamentaux des marchés publics ?',
          options: [
            'Rapidité et efficacité uniquement',
            'Liberté d\'accès, égalité de traitement, transparence',
            'Préférence nationale et protection locale',
            'Négociation directe et flexibilité'
          ],
          correctAnswer: 1,
          explanation: 'Les trois principes fondamentaux sont : la liberté d\'accès à la commande publique, l\'égalité de traitement des candidats, et la transparence des procédures.'
        },
        {
          id: 'q4',
          question: 'Qui peut être autorité contractante dans un marché public ?',
          options: [
            'Uniquement l\'État central',
            'Les entreprises privées mandatées',
            'L\'État, les collectivités territoriales, les établissements publics',
            'Seulement les ministères techniques'
          ],
          correctAnswer: 2,
          explanation: 'Les autorités contractantes incluent l\'État, les collectivités territoriales, les établissements publics et toute personne morale de droit public.'
        },
        {
          id: 'q5',
          question: 'Quelle est la durée minimale de publicité pour un appel d\'offres ouvert ?',
          options: [
            '15 jours',
            '21 jours',
            '30 jours',
            '45 jours'
          ],
          correctAnswer: 2,
          explanation: 'La durée minimale de publicité pour un appel d\'offres ouvert est généralement de 30 jours pour permettre aux entreprises de préparer leurs offres.'
        }
      ]
    },
    {
      id: 'quiz-module-2',
      title: 'Quiz Module 2 - Procédures de Passation',
      description: 'Testez vos connaissances sur les différentes procédures',
      minPassingScore: 75,
      timeLimit: 420, // 7 minutes
      questions: [
        {
          id: 'q6',
          question: 'Dans quel cas peut-on utiliser la procédure de gré à gré ?',
          options: [
            'Quand on veut aller plus vite',
            'En cas d\'urgence impérieuse ou de monopole technique',
            'Pour favoriser une entreprise locale',
            'Quand le budget est limité'
          ],
          correctAnswer: 1,
          explanation: 'Le gré à gré ne peut être utilisé que dans des cas exceptionnels : urgence impérieuse, monopole technique, marchés de faible montant, ou échec de procédures antérieures.'
        },
        {
          id: 'q7',
          question: 'Quelle est la différence entre appel d\'offres ouvert et restreint ?',
          options: [
            'Le montant du marché',
            'Le nombre de candidats autorisés à soumissionner',
            'La durée de la procédure',
            'Le type de prestations'
          ],
          correctAnswer: 1,
          explanation: 'Dans l\'appel d\'offres ouvert, tout candidat peut soumissionner. Dans l\'appel d\'offres restreint, seuls les candidats présélectionnés peuvent remettre une offre.'
        },
        {
          id: 'q8',
          question: 'Qu\'est-ce qu\'une commission d\'ouverture des plis ?',
          options: [
            'Un groupe qui rédige le dossier d\'appel d\'offres',
            'Un organe qui procède à l\'ouverture publique des offres',
            'Une équipe qui négocie avec les soumissionnaires',
            'Un comité qui valide les paiements'
          ],
          correctAnswer: 1,
          explanation: 'La commission d\'ouverture des plis est un organe collégial qui procède à l\'ouverture publique des offres à la date et heure fixées dans l\'avis d\'appel d\'offres.'
        },
        {
          id: 'q9',
          question: 'Que signifie "offre anormalement basse" ?',
          options: [
            'Une offre avec des erreurs de calcul',
            'Une offre significativement inférieure aux autres',
            'Une offre incomplète',
            'Une offre hors délai'
          ],
          correctAnswer: 1,
          explanation: 'Une offre anormalement basse est une offre dont le prix est significativement inférieur aux autres, soulevant des doutes sur la capacité du soumissionnaire à exécuter le marché.'
        },
        {
          id: 'q10',
          question: 'Quel est le rôle de l\'organe de contrôle des marchés publics ?',
          options: [
            'Exécuter les marchés',
            'Contrôler la régularité des procédures',
            'Payer les entreprises',
            'Former les acheteurs publics'
          ],
          correctAnswer: 1,
          explanation: 'L\'organe de contrôle (comme l\'ANRMP) vérifie la régularité et la conformité des procédures de passation des marchés publics avant leur approbation.'
        }
      ]
    }
  ],
  'perfectionnement-marches-publics': [
    {
      id: 'quiz-advanced-1',
      title: 'Quiz Avancé - Marchés Complexes',
      description: 'Évaluation sur les marchés spécialisés et complexes',
      minPassingScore: 80,
      timeLimit: 600, // 10 minutes
      questions: [
        {
          id: 'qa1',
          question: 'Qu\'est-ce qu\'un marché à tranches conditionnelles ?',
          options: [
            'Un marché divisé en plusieurs lots',
            'Un marché avec une tranche ferme et des tranches optionnelles',
            'Un marché conditionné par le budget',
            'Un marché avec des pénalités'
          ],
          correctAnswer: 1,
          explanation: 'Un marché à tranches conditionnelles comprend une tranche ferme (obligatoire) et des tranches conditionnelles (optionnelles) que l\'administration peut décider d\'exécuter ou non.'
        },
        {
          id: 'qa2',
          question: 'Dans quel cas utilise-t-on la procédure de dialogue compétitif ?',
          options: [
            'Pour tous les marchés de services',
            'Quand les besoins ne peuvent être définis précisément à l\'avance',
            'Pour accélérer la procédure',
            'Uniquement pour les marchés internationaux'
          ],
          correctAnswer: 1,
          explanation: 'Le dialogue compétitif est utilisé pour les marchés particulièrement complexes où l\'administration ne peut pas définir précisément ses besoins techniques, juridiques ou financiers à l\'avance.'
        },
        {
          id: 'qa3',
          question: 'Qu\'est-ce que la dématérialisation des marchés publics ?',
          options: [
            'La suppression des documents papier',
            'L\'utilisation de plateformes électroniques pour les procédures',
            'La réduction des coûts administratifs',
            'La simplification des procédures'
          ],
          correctAnswer: 1,
          explanation: 'La dématérialisation consiste à utiliser des moyens électroniques pour toutes les étapes de la procédure : publication, soumission, évaluation, notification.'
        }
      ]
    }
  ]
};

export const getQuizzesForCourse = (courseId: string): Quiz[] => {
  return quizData[courseId] || [];
};

export const getQuizById = (courseId: string, quizId: string): Quiz | undefined => {
  const courseQuizzes = quizData[courseId] || [];
  return courseQuizzes.find(quiz => quiz.id === quizId);
};