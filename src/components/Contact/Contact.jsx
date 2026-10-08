import React, { useState } from 'react';
import './Contact.css';

// Composant Contact : Coordonnées administratives, accès et formulaire de contact
export default function Contact({ contactInfo }) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Admissions & Contact</span>
          <h2 className="section-title">Prendre Contact avec Notre Établissement</h2>
          <div className="title-divider"></div>
          <p className="section-subtitle">
            Nos conseillers d'admission vous reçoivent sur rendez-vous ou répondent à vos questions sous 24 à 48 heures.
          </p>
        </div>

        <div className="contact-grid">
          {/* Bloc d'informations pratiques et administratives */}
          <div className="contact-details-panel">
            <h3 className="panel-title">Secrétariat Général & Admissions</h3>
            <p className="panel-desc">
              Pour toute demande relative aux conditions d'admission, au financement CPF, à l'alternance ou aux dates de rentrée.
            </p>

            <div className="details-list">
              <div className="detail-item">
                <span className="detail-heading">Adresse du campus</span>
                <p className="detail-value">{contactInfo.adresse}</p>
                <span className="sub-detail">Accès : Métro Lignes 2, 5 & 7bis — Station Jaurès / Stalingrad</span>
              </div>

              <div className="detail-item">
                <span className="detail-heading">Standard téléphonique</span>
                <p className="detail-value">
                  <a href={`tel:${contactInfo.telephone}`}>{contactInfo.telephone}</a>
                </p>
                <span className="sub-detail">Ligne directe service inscriptions</span>
              </div>

              <div className="detail-item">
                <span className="detail-heading">Courriel d'admission</span>
                <p className="detail-value">
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </p>
                <span className="sub-detail">Réponse sous 24 heures ouvrées</span>
              </div>

              <div className="detail-item">
                <span className="detail-heading">Horaires d'accueil du public</span>
                <p className="detail-value">{contactInfo.horaires}</p>
                <span className="sub-detail">Accueil téléphonique continu</span>
              </div>
            </div>
          </div>

          {/* Formulaire de demande de renseignements */}
          <div className="contact-form-panel">
            <h3 className="panel-title">Demande de Documentation & Renseignements</h3>
            
            {formSubmitted ? (
              <div className="form-success-banner">
                <h4>Demande enregistrée avec succès</h4>
                <p>
                  Un conseiller pédagogique prendra contact avec vous dans les plus brefs délais pour vous transmettre le dossier d'inscription.
                </p>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setFormSubmitted(false)}
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="admission-form">
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="civilite">Civilité</label>
                    <select id="civilite" defaultValue="Mme">
                      <option value="Mme">Madame</option>
                      <option value="M.">Monsieur</option>
                    </select>
                  </div>
                  <div className="form-field form-field-grow">
                    <label htmlFor="nom">Nom et Prénom *</label>
                    <input
                      type="text"
                      id="nom"
                      placeholder="Ex : Julie Durand"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="email">Adresse email *</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="julie.durand@domaine.fr"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="tel">Téléphone *</label>
                    <input
                      type="tel"
                      id="tel"
                      placeholder="06 12 34 56 78"
                      required
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="filiere">Filière souhaitée</label>
                  <select id="filiere" defaultValue="dev">
                    <option value="dev">Développeur Concepteur Web & Mobile</option>
                    <option value="ia">Ingénierie des Données & Intelligence Artificielle</option>
                    <option value="cyber">Administrateur Systèmes & Cybersécurité</option>
                    <option value="design">Product Design & Ergonomie UI/UX</option>
                    <option value="autre">Autre / Orientation générale</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="message">Votre question ou projet professionnel</label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Précisez votre situation actuelle et vos objectifs de formation..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  Transmettre ma demande d'admission
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
