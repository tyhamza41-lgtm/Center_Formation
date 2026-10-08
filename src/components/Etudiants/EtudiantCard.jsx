import React from 'react';

// Composant réutilisable pour afficher un profil étudiant inscrit
export default function EtudiantCard({ nom, niveau, formation, annee }) {
  const initials = nom
    .split(' ')
    .filter((_, i) => i < 2)
    .map((n) => n[0])
    .join('');

  return (
    <article className="etudiant-card">
      <div className="etudiant-header">
        <div className="etudiant-avatar">{initials}</div>
        <div className="etudiant-titles">
          <h3 className="etudiant-nom">{nom}</h3>
          <span className="etudiant-badge">{annee}</span>
        </div>
      </div>

      <div className="etudiant-info-grid">
        <div className="info-entry">
          <span className="info-title">Profil d'entrée :</span>
          <span className="info-detail">{niveau}</span>
        </div>
        <div className="info-entry">
          <span className="info-title">Filière suivie :</span>
          <span className="info-detail formation-focus">{formation}</span>
        </div>
      </div>
    </article>
  );
}
