import React from 'react';
import './Accueil.css';

// Composant Accueil : Section principale avec présentation institutionnelle
export default function Accueil({ titre, message, texte }) {
  return (
    <section id="accueil" className="accueil-section">
      <div className="accueil-container">
        <div className="accueil-grid">
          <div className="accueil-main-col">
            <span className="accueil-kicker">Établissement Supérieur Privé</span>
            <h2 className="accueil-headline">{titre}</h2>
            <p className="accueil-lead">{message}</p>
            <p className="accueil-body">{texte}</p>

            <div className="accueil-buttons">
              <a href="#formations" className="btn btn-primary">
                Consulter les formations
              </a>
              <a href="#contact" className="btn btn-outline">
                Prendre rendez-vous avec un conseiller
              </a>
            </div>
          </div>

          <div className="accueil-side-col">
            <div className="institution-card">
              <div className="institution-card-header">
                <h3>Informations Admissions 2026</h3>
                <span className="status-dot"></span>
              </div>
              <ul className="institution-info-list">
                <li>
                  <strong>Statut :</strong> Inscriptions ouvertes en ligne
                </li>
                <li>
                  <strong>Publics :</strong> Étudiants, demandeurs d'emploi, salariés
                </li>
                <li>
                  <strong>Financement :</strong> Éligible CPF, OPCO, Alternance
                </li>
                <li>
                  <strong>Accompagnement :</strong> Aide à la recherche d'alternance
                </li>
              </ul>
              <div className="institution-card-footer">
                <a href="#contact" className="link-arrow">
                  Télécharger la brochure d'admission →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Barre de réassurance humaine et institutionnelle */}
        <div className="reassurance-bar">
          <div className="reassurance-item">
            <span className="reassurance-bullet">✓</span>
            <span>Titres RNCP reconnus par l'État</span>
          </div>
          <div className="reassurance-item">
            <span className="reassurance-bullet">✓</span>
            <span>Formation en alternance ou initiale</span>
          </div>
          <div className="reassurance-item">
            <span className="reassurance-bullet">✓</span>
            <span>Intervenants professionnels en exercice</span>
          </div>
          <div className="reassurance-item">
            <span className="reassurance-bullet">✓</span>
            <span>94% d'insertion professionnelle</span>
          </div>
        </div>
      </div>
    </section>
  );
}
