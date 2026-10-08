import React from 'react';
import './App.css';

// Import des données centralisées
import {
  centerInfo,
  formationsData,
  formateursData,
  etudiantsData,
  statistiquesData
} from './data/centerData';

// Import de tous les composants selon l'ordre demandé
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Accueil from './components/Accueil/Accueil';
import APropos from './components/APropos/APropos';
import Formations from './components/Formations/Formations';
import Formateurs from './components/Formateurs/Formateurs';
import Etudiants from './components/Etudiants/Etudiants';
import Statistiques from './components/Statistiques/Statistiques';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* 1. Haut de la page : nom du centre et courte présentation */}
      <Header
        nom={centerInfo.nom}
        presentation={centerInfo.descriptionCourte}
      />

      {/* 2. Barre de navigation vers les différentes sections */}
      <Navbar />

      <main>
        {/* 3. Section d'accueil : message de bienvenue et description */}
        <Accueil
          titre={centerInfo.accueil.titre}
          message={centerInfo.accueil.message}
          texte={centerInfo.accueil.texte}
        />

        {/* 4. Section « À propos » : objectif, valeurs et domaine de formation */}
        <APropos
          objectif={centerInfo.aPropos.objectif}
          valeurs={centerInfo.aPropos.valeurs}
          domaines={centerInfo.aPropos.domaines}
        />

        {/* 5. Section « Formations » : liste réutilisant FormationCard */}
        <Formations
          formations={formationsData}
        />

        {/* 6. Section « Formateurs » : liste réutilisant FormateurCard */}
        <Formateurs
          formateurs={formateursData}
        />

        {/* 7. Section « Étudiants » : liste réutilisant EtudiantCard */}
        <Etudiants
          etudiants={etudiantsData}
        />

        {/* 8. Section « Statistiques » : chiffres clés avec StatCard */}
        <Statistiques
          statistiques={statistiquesData}
        />

        {/* 9. Section « Contact » : adresse, téléphone, email et formulaire */}
        <Contact
          contactInfo={centerInfo.contact}
        />
      </main>

      {/* 10. Pied de page : informations générales et droits du centre */}
      <Footer
        nom={centerInfo.nom}
        slogan={centerInfo.slogan}
        droits={centerInfo.droits}
      />
    </div>
  );
}

export default App;