import React from 'react';
import EtudiantCard from './EtudiantCard';
import './Etudiants.css';

// Composant Etudiants : Témoignages et profils des étudiants inscrits
export default function Etudiants({ etudiants }) {
  return (
    <section id="etudiants" className="etudiants-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Communauté & Promotions</span>
          <h2 className="section-title">Profils d'Étudiants Inscrits</h2>
          <div className="title-divider"></div>
          <p className="section-subtitle">
            Un aperçu de la diversité des parcours universitaires et professionnels au sein de nos promotions actuelles.
          </p>
        </div>

        <div className="etudiants-grid">
          {etudiants.map((etudiant) => (
            <EtudiantCard
              key={etudiant.id}
              nom={etudiant.nom}
              niveau={etudiant.niveau}
              formation={etudiant.formation}
              annee={etudiant.annee}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
