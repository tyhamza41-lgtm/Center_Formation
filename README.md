# 🎓 Institut Horizon Formation — Application Web

[![React](https://img.shields.io/badge/React-19.3.0-61DAFB?logo=react&logoColor=black&style=for-the-badge)](https://react.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-Modular_%26_Responsive-1572B6?logo=css3&logoColor=white&style=for-the-badge)](https://www.w3.org/Style/CSS/)
[![License](https://img.shields.io/badge/License-Propriétaire-blue?style=for-the-badge)](LICENSE)
[![Status](https://img.shields.io/badge/Status-En_Production-success?style=for-the-badge)](#)

> **Portail officiel et vitrine institutionnelle de l'Institut Horizon Formation**, établissement d'enseignement supérieur et de perfectionnement professionnel dédié aux métiers du numérique, de l'intelligence artificielle, des systèmes et du design.

---

## 📑 Table des Matières

- [À Propos du Projet](#-à-propos-du-projet)
- [Fonctionnalités Principales](#-fonctionnalités-principales)
- [Architecture & Structure du Code](#-architecture--structure-du-code)
- [Technologies & Outils](#-technologies--outils)
- [Prérequis](#-prérequis)
- [Installation & Démarrage](#-installation--démarrage)
- [Scripts Disponibles](#-scripts-disponibles)
- [Gestion des Données (Scalabilité)](#-gestion-des-données-scalabilité)
- [Bonnes Pratiques & Qualité](#-bonnes-pratiques--qualité)
- [Auteurs & Droits](#-auteurs--droits)

---

## 🌟 À Propos du Projet

Cette application React présente l'écosystème complet de l'**Institut Horizon Formation** : ses parcours diplômants (titres RNCP), son corps professoral composé d'experts du secteur, ses promotions d'étudiants, ses indicateurs de réussite, ainsi qu'un point de contact interactif pour les admissions.

L'objectif de l'application est d'offrir une expérience utilisateur fluide, élégante et entièrement responsive, tout en conservant une base de code hautement maintenable et découplée.

---

## 🚀 Fonctionnalités Principales

| Section | Description | Composant Principal |
| :--- | :--- | :--- |
| **En-tête & Marque** | Présentation de l'établissement et devise officielle | `Header` |
| **Navigation Fluide** | Barre de navigation sticky avec ancres et défilement fluide | `Navbar` |
| **Section Accueil** | Hero section avec proposition de valeur et call-to-action | `Accueil` |
| **À Propos** | Vision pédagogique, valeurs fondamentales et domaines d'expertise | `APropos` |
| **Offre de Formation** | Catalogue des filières certifiantes avec fiches détaillées (RNCP, durée, badges) | `Formations` & `FormationCard` |
| **Corps Professoral** | Présentation des formateurs experts et de leurs spécialisations | `Formateurs` & `FormateurCard` |
| **Témoignages & Étudiants** | Mise en valeur des apprenants et de leur parcours | `Etudiants` & `EtudiantCard` |
| **Indicateurs Clés** | Données chiffrées (insertion professionnelle, taux de réussite, etc.) | `Statistiques` & `StatCard` |
| **Admissions & Contact** | Coordonnées officielles, accès métros et formulaire interactif | `Contact` |
| **Pied de page** | Navigation secondaire, mentions légales et droits réservés | `Footer` |

---

## 🏗️ Architecture & Structure du Code

Le projet adopte une architecture modulaire basée sur la séparation des responsabilités :

```text
mon-app/
├── public/                     # Fichiers statiques publics (HTML, favicons, robots.txt)
├── src/
│   ├── components/             # Composants d'interface modulaires
│   │   ├── Accueil/            # Section hero et message de bienvenue
│   │   ├── APropos/            # Section présentation et valeurs
│   │   ├── Contact/            # Formulaire et coordonnées d'accès
│   │   ├── Etudiants/          # Cartes et liste des étudiants/alumni
│   │   ├── Footer/             # Pied de page institutionnel
│   │   ├── Formateurs/         # Fiches profils des intervenants
│   │   ├── Formations/         # Catalogue et cartes des filières
│   │   ├── Header/             # Bandeau supérieur et identité
│   │   ├── Navbar/             # Navigation principale
│   │   └── Statistiques/       # Indicateurs de performance
│   │
│   ├── data/
│   │   └── centerData.js       # Source unique de vérité (données centralisées)
│   │
│   ├── App.css                 # Styles globaux du conteneur
│   ├── App.js                  # Composant racine orchestrant les sections
│   ├── index.css               # Reset CSS et typographies de base
│   └── index.js                # Point d'entrée React 19 (createRoot)
│
├── package.json                # Dépendances et scripts de l'application
└── README.md                   # Documentation du projet
```

---

## 🛠️ Technologies & Outils

- **Front-end Library** : [React 19](https://react.dev/)
- **Architecture de Styles** : CSS3 moderne (Variables CSS, Flexbox, CSS Grid, Media Queries)
- **Tooling & Build** : `react-scripts` 5.0.1 (Webpack, Babel)
- **Environnement d'exécution** : Node.js (version 18+ recommandée)

---

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé sur votre machine :

- **Node.js** : `>= 18.0.0` ([Télécharger Node.js](https://nodejs.org/))
- **npm** (inclus avec Node.js) ou **yarn** / **pnpm**

Vérifiez vos versions avec :
```bash
node -v
npm -v
```

---

## ⚡ Installation & Démarrage

### 1. Cloner le dépôt
```bash
git clone https://github.com/votre-compte/mon-app.git
cd mon-app
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Démarrer le serveur de développement
```bash
npm start
```
L'application sera accessible sur [http://localhost:3000](http://localhost:3000). Le rechargement à chaud (Hot Reload) est activé par défaut.

---

## 📜 Scripts Disponibles

Dans le dossier du projet, vous pouvez exécuter les commandes suivantes :

| Commande | Action |
| :--- | :--- |
| `npm start` ou `npm run dev` | Lance l'application en mode développement local |
| `npm run build` | Compile et minifie l'application pour la production dans le dossier `build/` |
| `npm test` | Exécute les tests unitaires avec Jest et React Testing Library |
| `npm run eject` | *Action irréversible.* Éjecte la configuration Create React App |

---

## 📊 Gestion des Données (Scalabilité)

Toutes les informations métier du centre de formation sont découplées des composants d'affichage et centralisées dans le fichier :

```text
src/data/centerData.js
```

Pour mettre à jour les cursus, ajouter un formateur, modifier les coordonnées ou adapter les statistiques, il suffit d'éditer ce fichier sans toucher aux composants JSX :

```javascript
// Exemple d'ajout d'une formation dans centerData.js
export const formationsData = [
  // ...
  {
    id: 5,
    nom: "DevOps & Cloud Architecture",
    description: "Automatisation CI/CD, conteneurisation Docker/Kubernetes et infrastructures AWS.",
    duree: "6 mois (800 h)",
    niveau: "Titre RNCP niveau 7 (Bac +5)",
    badge: "Haute employabilité"
  }
];
```

---

## 💎 Bonnes Pratiques & Qualité

- **Composants atomiques et réutilisables** : Séparation nette entre conteneurs de section et composants de carte (`FormationCard`, `FormateurCard`, `StatCard`, etc.).
- **Design Adaptatif (Responsive)** : Adapté aux écrans mobiles, tablettes et moniteurs haute définition.
- **Accessibilité (a11y)** : Balisage HTML sémantique (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), contrastes étudiés et attributs ARIA.
- **Performances** : Pas de bibliothèques superflues, empreinte mémoire minimale et temps de chargement optimisé.

---

## 👥 Auteurs & Droits

Développé pour l'**Institut Horizon Formation**.  
© 2026 Hamza Tyamani. Tous droits réservés.
