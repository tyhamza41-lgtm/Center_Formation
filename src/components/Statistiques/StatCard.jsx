import React from 'react';

// Composant réutilisable pour afficher un chiffre clé via les props
export default function StatCard({ valeur, label, description }) {
  return (
    <div className="stat-card">
      <div className="stat-valeur">{valeur}</div>
      <div className="stat-label">{label}</div>
      {description && <div className="stat-desc">{description}</div>}
    </div>
  );
}
