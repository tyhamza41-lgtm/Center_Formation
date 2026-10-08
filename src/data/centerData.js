// Données du centre de formation - Institut Horizon Formation

export const centerInfo = {
  nom: "Institut Horizon Formation",
  slogan: "Établissement d'enseignement supérieur et de perfectionnement professionnel",
  descriptionCourte: "Pôle d'excellence dédié à la formation continue, aux métiers du numérique et à l'insertion professionnelle.",
  accueil: {
    titre: "Formez-vous aux métiers d'avenir avec des experts du secteur",
    message: "Des cursus certifiants, intensifs et reconnus par l'État pour propulser votre trajectoire professionnelle.",
    texte: "Depuis plus de 10 ans, l'Institut Horizon Formation forme étudiants et professionnels aux compétences les plus recherchées du marché. Nos parcours allient rigueur académique, mise en pratique intensive et accompagnement individualisé vers l'emploi."
  },
  aPropos: {
    titre: "Notre Établissement",
    objectif: "Garantir à chaque apprenant une montée en compétences concrète et opérationnelle grâce à des formations construites en étroite collaboration avec les entreprises partenaires.",
    valeurs: [
      {
        titre: "Rigueur & Excellence",
        description: "Des référentiels pédagogiques exigeants, alignés sur les besoins réels des recruteurs et les standards de la profession."
      },
      {
        titre: "Pédagogie par Projet",
        description: "Une immersion active : 80% du temps d'apprentissage est consacré à la réalisation de cas d'entreprise et d'ateliers pratiques."
      },
      {
        titre: "Accompagnement Vers l'Emploi",
        description: "Coaching carrière individuel, préparation aux entretiens et mise en relation directe avec notre réseau d'entreprises partenaires."
      }
    ],
    domaines: "Développement Informatique, Systèmes & Cybersécurité, Intelligence Artificielle & Big Data, Design Numérique & Gestion de Projet."
  },
  contact: {
    adresse: "125 Boulevard de la Villette, 75019 Paris",
    telephone: "01 42 68 90 00",
    email: "admissions@horizon-formation.fr",
    horaires: "Du lundi au vendredi : 8h30 – 18h30"
  },
  droits: "© 2026 Institut Horizon Formation — Établissement privé d'enseignement technique supérieur. Tous droits réservés."
};

export const formationsData = [
  {
    id: 1,
    nom: "Développeur Concepteur Web & Mobile",
    description: "Apprentissage approfondi du développement full-stack moderne : architectures réactives, API REST, TypeScript, React et Node.js.",
    duree: "6 mois (840 h) + stage",
    niveau: "Titre RNCP niveau 6 (Bac +3/4)",
    badge: "Formation certifiante"
  },
  {
    id: 2,
    nom: "Ingénierie des Données & Intelligence Artificielle",
    description: "Conception de pipelines de données, modélisation prédictive, Machine Learning appliqué et intégration de modèles d'IA en production.",
    duree: "8 mois (1 050 h)",
    niveau: "Titre RNCP niveau 7 (Bac +5)",
    badge: "Haute spécialisation"
  },
  {
    id: 3,
    nom: "Administrateur Systèmes & Cybersécurité",
    description: "Protection des infrastructures critiques, audit de conformité, détection d'intrusions et mise en œuvre des bonnes pratiques de sécurité réseau.",
    duree: "6 mois (800 h)",
    niveau: "Titre RNCP niveau 6 (Bac +3/4)",
    badge: "Secteur en tension"
  },
  {
    id: 4,
    nom: "Product Design & Ergonomie des Interfaces (UI/UX)",
    description: "Recherche utilisateur, prototypage interactif, ergonomie cognitive et création de systèmes de conception graphiques professionnels.",
    duree: "5 mois (650 h)",
    niveau: "Titre RNCP niveau 6 (Bac +3/4)",
    badge: "Design & Produit"
  }
];

export const formateursData = [
  {
    id: 1,
    nom: "Sophie Martin",
    specialite: "Architecture Logicielle & React",
    experience: "12 ans d'expérience industrielle",
    description: "Ancienne Lead Développeuse dans le secteur bancaire et formatrice senior certifiée, spécialiste de la qualité de code et du clean code."
  },
  {
    id: 2,
    nom: "Dr. Karim Benali",
    specialite: "Data Science & Intelligence Artificielle",
    experience: "10 ans d'enseignement & R&D",
    description: "Docteur en informatique appliquée, chercheur et consultant en stratégie d'intégration de modèles prédictifs auprès d'entreprises du CAC 40."
  },
  {
    id: 3,
    nom: "Alexandre Dupont",
    specialite: "Sécurité Opérationnelle & Cloud",
    experience: "9 ans d'expertise en cybersécurité",
    description: "Auditeur certifié CISSP et consultant indépendant en sécurité des infrastructures cloud pour des organismes institutionnels."
  },
  {
    id: 4,
    nom: "Élodie Renaud",
    specialite: "Design UI/UX & Design Thinking",
    experience: "8 ans en agences de design",
    description: "Directrice artistique digitale et mentor, intervenante régulière auprès des promotions d'étudiants en conception de produits numériques."
  }
];

export const etudiantsData = [
  {
    id: 1,
    nom: "Thomas Dubois",
    niveau: "Licence Sciences et Technologies",
    formation: "Développeur Concepteur Web & Mobile",
    annee: "Promotion 2025 – 2026"
  },
  {
    id: 2,
    nom: "Fatima Zahra",
    niveau: "Master 1 Mathématiques et Informatique",
    formation: "Ingénierie des Données & Intelligence Artificielle",
    annee: "Promotion 2025 – 2026"
  },
  {
    id: 3,
    nom: "Lucas Morel",
    niveau: "BTS Services Informatiques aux Organisations",
    formation: "Administrateur Systèmes & Cybersécurité",
    annee: "Promotion 2024 – 2025"
  },
  {
    id: 4,
    nom: "Camille Leroy",
    niveau: "Licence Arts Graphiques & Multimédia",
    formation: "Product Design & Ergonomie UI/UX",
    annee: "Promotion 2025 – 2026"
  }
];

export const statistiquesData = [
  {
    id: 1,
    valeur: "1 250+",
    label: "Diplômés en activité",
    description: "Insérés en CDI dans les 6 mois"
  },
  {
    id: 2,
    valeur: "94 %",
    label: "Taux de réussite aux examens",
    description: "Aux certifications d'État"
  },
  {
    id: 3,
    valeur: "24",
    label: "Intervenants professionnels",
    description: "Experts en activité"
  },
  {
    id: 4,
    valeur: "11 ans",
    label: "D'expérience d'enseignement",
    description: "Au service de l'insertion"
  }
];
