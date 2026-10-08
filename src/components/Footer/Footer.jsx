import React from 'react';
import './Footer.css';

// Composant Footer : Pied de page institutionnel conforme aux standards académiques
export default function Footer({ nom, slogan, droits }) {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-main-grid">
          {/* Marque & Identification */}
          <div className="footer-col brand-col">
            <div className="footer-logo-row">
              <svg width="32" height="32" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="44" height="44" rx="8" fill="#3b82f6" />
                <path d="M22 10L10 17L22 24L34 17L22 10Z" fill="#ffffff" />
                <rect x="14" y="24" width="3" height="9" fill="#dbeafe" />
                <rect x="20.5" y="24" width="3" height="9" fill="#dbeafe" />
                <rect x="27" y="24" width="3" height="9" fill="#dbeafe" />
                <rect x="11" y="33" width="22" height="2.5" rx="1" fill="#ffffff" />
              </svg>
              <h3 className="footer-brand-title">{nom}</h3>
            </div>
            <p className="footer-brand-slogan">{slogan}</p>
            <p className="footer-legal-mention">
              Établissement privé d'enseignement technique supérieur déclaré auprès du Rectorat de l'Académie de Paris.
            </p>
          </div>

          {/* Navigation Rapide */}
          <div className="footer-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#accueil">Accueil</a></li>
              <li><a href="#apropos">Notre Établissement</a></li>
              <li><a href="#formations">Offre de Formations</a></li>
              <li><a href="#formateurs">Équipe Pédagogique</a></li>
              <li><a href="#etudiants">Profils Étudiants</a></li>
              <li><a href="#statistiques">Indicateurs & Résultats</a></li>
              <li><a href="#contact">Contact & Accès</a></li>
            </ul>
          </div>

          {/* Accréditations & Labels */}
          <div className="footer-col">
            <h4 className="footer-heading">Labels & Certifications</h4>
            <ul className="footer-certifs-list">
              <li>
                <strong>Certification Qualiopi</strong>
                <span>Au titre des actions de formation et de la validation des acquis.</span>
              </li>
              <li>
                <strong>France Compétences</strong>
                <span>Titres enregistrés au Répertoire National des Certifications Professionnelles.</span>
              </li>
              <li>
                <strong>Financement Formation</strong>
                <span>Éligibilité CPF, financements Région, OPCO et dispositifs France Travail.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Ligne inférieure de mentions obligatoires */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">{droits}</p>
          <div className="footer-legals">
            <a href="#contact">Mentions Légales</a>
            <span className="sep">•</span>
            <a href="#contact">Politique de Confidentialité</a>
            <span className="sep">•</span>
            <a href="#contact">Accessibilité : Partiellement conforme</a>
            <span className="sep">•</span>
            <a href="#contact">Règlement Intérieur</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
