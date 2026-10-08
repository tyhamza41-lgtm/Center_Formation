import React from 'react';

// Composant réutilisable pour afficher une formation via les props
export default function FormationCard({ nom, description, duree, niveau, badge }) {
  return (
    <article className="formation-card">
      <div className="formation-card-header">
        {badge && <span className="formation-badge">{badge}</span>}
        <h3 className="formation-nom">{nom}</h3>
      </div>
      
      <p className="formation-desc">{description}</p>
      
      <dl className="formation-specs">
        <div className="spec-row">
          <dt className="spec-key">Durée de formation :</dt>
          <dd className="spec-val">{duree}</dd>
        </div>
        <div className="spec-row">
          <dt className="spec-key">Certification :</dt>
          <dd className="spec-val">{niveau}</dd>
        </div>
      </dl>

      <div className="formation-card-actions">
        <a href="#contact" className="btn-formation-details">
          Détails & Programme complet
        </a>
      </div>
    </article>
  );
}
