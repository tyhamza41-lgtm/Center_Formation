import React from 'react';

// Composant réutilisable pour afficher un formateur / intervenant
export default function FormateurCard({ nom, specialite, experience, description }) {
  const initials = nom
    .split(' ')
    .filter((_, i) => i < 2)
    .map((n) => n[0])
    .join('');
    
  return (
    <article className="formateur-card">
      <div className="formateur-top">
        <div className="formateur-avatar">{initials}</div>
        <div className="formateur-meta">
          <h3 className="formateur-nom">{nom}</h3>
          <span className="formateur-specialite">{specialite}</span>
          <span className="formateur-experience">{experience}</span>
        </div>
      </div>

      <p className="formateur-description">{description}</p>
    </article>
  );
}
