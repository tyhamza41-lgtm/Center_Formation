import React from 'react';
import FormationCard from './FormationCard';
import './Formations.css';

// Composant Formations : Catalogue des filières proposées
export default function Formations({ formations }) {
  return (
    <section id="formations" className="formations-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Offre Pédagogique</span>
          <h2 className="section-title">Nos Formations Professionnelles</h2>
          <div className="title-divider"></div>
          <p className="section-subtitle">
            Des parcours diplômants et certifiants, dispensés en présentiel ou en rythme alterné.
          </p>
        </div>

        <div className="formations-grid">
          {formations.map((formation) => (
            <FormationCard
              key={formation.id}
              nom={formation.nom}
              description={formation.description}
              duree={formation.duree}
              niveau={formation.niveau}
              badge={formation.badge}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
