import React from 'react';
import FormateurCard from './FormateurCard';
import './Formateurs.css';

// Composant Formateurs : Corps professoral et intervenants métiers
export default function Formateurs({ formateurs }) {
  return (
    <section id="formateurs" className="formateurs-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Équipe Pédagogique</span>
          <h2 className="section-title">Nos Formateurs & Intervenants</h2>
          <div className="title-divider"></div>
          <p className="section-subtitle">
            Des professionnels chevronnés, actifs sur le marché, qui transmettent les exigences concrètes du secteur.
          </p>
        </div>

        <div className="formateurs-grid">
          {formateurs.map((formateur) => (
            <FormateurCard
              key={formateur.id}
              nom={formateur.nom}
              specialite={formateur.specialite}
              experience={formateur.experience}
              description={formateur.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
