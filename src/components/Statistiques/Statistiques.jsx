import React from 'react';
import StatCard from './StatCard';
import './Statistiques.css';

// Composant Statistiques : Bilan chiffré des résultats et de l'expérience du centre
export default function Statistiques({ statistiques }) {
  return (
    <section id="statistiques" className="statistiques-section">
      <div className="section-container">
        <div className="statistiques-header">
          <span className="section-tag-light">Indicateurs de Performance</span>
          <h2 className="statistiques-title">Quelques Chiffres Clés de Notre Établissement</h2>
          <p className="statistiques-subtitle">
            Des résultats concrets qui témoignent de l'engagement de notre équipe pédagogique auprès des apprenants.
          </p>
        </div>

        <div className="statistiques-grid">
          {statistiques.map((stat) => (
            <StatCard
              key={stat.id}
              valeur={stat.valeur}
              label={stat.label}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
