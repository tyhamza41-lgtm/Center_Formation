import React from 'react';
import './APropos.css';

// Composant APropos : Présentation institutionnelle de la mission, valeurs et domaines
export default function APropos({ objectif, valeurs, domaines }) {
  return (
    <section id="apropos" className="apropos-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Qui sommes-nous</span>
          <h2 className="section-title">À Propos de Notre Établissement</h2>
          <div className="title-divider"></div>
          <p className="section-subtitle">
            Un projet pédagogique tourné vers l'exigence opérationnelle et la réussite professionnelle de chaque apprenant.
          </p>
        </div>

        <div className="apropos-columns">
          {/* Bloc Objectif & Domaines */}
          <div className="apropos-text-block">
            <div className="apropos-panel">
              <h3 className="panel-heading">Notre Mission Pédagogique</h3>
              <p className="panel-text">{objectif}</p>
            </div>

            <div className="apropos-panel">
              <h3 className="panel-heading">Domaines d'Expertise & Filières</h3>
              <p className="panel-text">{domaines}</p>
            </div>
          </div>

          {/* Bloc Valeurs */}
          <div className="valeurs-block">
            <h3 className="valeurs-block-title">Nos Engagements Fondamentaux</h3>
            <div className="valeurs-list">
              {valeurs.map((valeur, index) => (
                <div key={index} className="valeur-row">
                  <div className="valeur-index">0{index + 1}</div>
                  <div className="valeur-content">
                    <h4 className="valeur-name">{valeur.titre}</h4>
                    <p className="valeur-desc">{valeur.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
