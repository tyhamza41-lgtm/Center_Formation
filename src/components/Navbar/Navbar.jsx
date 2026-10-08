import React from 'react';
import './Navbar.css';

// Composant Navbar : Navigation sobre, claire et accessible
export default function Navbar() {
  const navLinks = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'À propos', href: '#apropos' },
    { label: 'Formations', href: '#formations' },
    { label: 'Formateurs', href: '#formateurs' },
    { label: 'Étudiants', href: '#etudiants' },
    { label: 'Statistiques', href: '#statistiques' },
    { label: 'Contact & Accès', href: '#contact' },
  ];

  return (
    <nav className="site-navbar">
      <div className="navbar-container">
        <ul className="navbar-menu">
          {navLinks.map((link) => (
            <li key={link.href} className="nav-item">
              <a href={link.href} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
