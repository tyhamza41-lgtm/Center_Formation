import React from 'react';
import './Header.css';

// Composant Header : En-tête institutionnel avec logo réaliste et présentation
export default function Header({ nom, presentation }) {
  return (
    <header className="site-header">
      {/* Barre supérieure d'informations pratiques */}
      <div className="header-topbar">
        <div className="header-topbar-inner">
          <span className="topbar-info">
            Campus Paris 19e — Admissions ouvertes pour la rentrée 2026/2027
          </span>
          <div className="topbar-contacts">
            <a href="tel:0142689000" className="topbar-link">Tél : 01 42 68 90 00</a>
            <span className="topbar-sep">|</span>
            <span className="topbar-badge">Certifié Qualiopi</span>
          </div>
        </div>
      </div>

      {/* Ligne principale de marque */}
      <div className="header-main">
        <div className="header-container">
          <div className="brand-group">
            {/* Logo vectoriel réaliste d'institut d'enseignement */}
            <div className="brand-logo">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="44" height="44" rx="8" fill="#1e3a8a" />
                {/* Toit / Fronton académique */}
                <path d="M22 10L10 17L22 24L34 17L22 10Z" fill="#ffffff" />
                {/* Colonnes */}
                <rect x="14" y="24" width="3" height="9" fill="#93c5fd" />
                <rect x="20.5" y="24" width="3" height="9" fill="#93c5fd" />
                <rect x="27" y="24" width="3" height="9" fill="#93c5fd" />
                {/* Socle */}
                <rect x="11" y="33" width="22" height="2.5" rx="1" fill="#ffffff" />
              </svg>
            </div>
            
            <div className="brand-text">
              <h1 className="brand-title">{nom}</h1>
              <p className="brand-desc">{presentation}</p>
            </div>
          </div>

          <div className="header-actions">
            <a href="#contact" className="header-cta-btn">
              Dossier de candidature
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
