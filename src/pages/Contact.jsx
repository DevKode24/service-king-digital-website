import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="skd-contact-page">

      {/* =====================================================
          HERO CONTACT
      ====================================================== */}
      <section className="skd-contact-hero">

        {/* Background shapes */}
        <div className="contact-shape contact-shape-1"></div>
        <div className="contact-shape contact-shape-2"></div>
        <div className="contact-shape contact-shape-3"></div>
        <div className="contact-shape contact-shape-4"></div>

        <div className="container position-relative">
          <div className="row align-items-center g-5">

            {/* Texte */}
            <div className="col-lg-6">

              <div className="contact-eyebrow">
                <span className="contact-eyebrow-dot"></span>
                CONTACTEZ SERVICE KING DIGITAL
              </div>

              <h1 className="contact-hero-title">
                Nous sommes là
                <span> pour vous aider.</span>
              </h1>

              <p className="contact-hero-description">
                Vous avez un projet, une question ou un besoin précis ?
                Notre équipe vous accompagne pour trouver une solution
                adaptée à votre activité et transformer vos idées en
                opportunités concrètes.
              </p>

              <div className="contact-hero-actions">
                <a
                  href="#contact-form"
                  className="btn-skd-primary"
                >
                  Parlons de votre projet
                  <i className="bi bi-arrow-down"></i>
                </a>

                <a
                  href="https://wa.me/24105927486"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-skd-outline-light"
                >
                  <i className="bi bi-whatsapp"></i>
                  WhatsApp
                </a>
              </div>

              <div className="contact-trust">
                <div>
                  <i className="bi bi-check-circle-fill"></i>
                  Réponse personnalisée
                </div>

                <div>
                  <i className="bi bi-check-circle-fill"></i>
                  Accompagnement de proximité
                </div>
              </div>

            </div>

            {/* Image */}
            <div className="col-lg-6">

              <div className="contact-visual">

                <div className="contact-image-glow"></div>

                <div className="contact-image-wrapper">
                  <img
                    src="/images/contact.jpg"
                    alt="Équipe Service King Digital"
                    className="contact-hero-image"
                  />
                </div>

                {/* Floating card */}
                <div className="contact-floating-card contact-floating-card-1">
                  <div className="floating-icon">
                    <i className="bi bi-chat-dots-fill"></i>
                  </div>

                  <div>
                    <strong>Parlons-en</strong>
                    <span>Votre projet nous intéresse</span>
                  </div>
                </div>

                <div className="contact-floating-card contact-floating-card-2">
                  <i className="bi bi-geo-alt-fill"></i>
                  <span>Libreville, Gabon</span>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          INTRO
      ====================================================== */}
      <section className="skd-contact-intro">
        <div className="container">

          <div className="text-center mx-auto contact-intro-content">

            <span className="skd-section-kicker">
              UN BESOIN ? UNE QUESTION ?
            </span>

            <h2>
              Parlons de votre projet.
            </h2>

            <p>
              Que vous souhaitiez développer votre présence en ligne,
              digitaliser votre activité, lancer une campagne marketing,
              acheter à l'international ou préparer un projet académique,
              notre équipe est à votre écoute.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          SERVICES CONTACT
      ====================================================== */}
      <section className="skd-contact-services">

        <div className="container">

          <div className="row g-4">

            {/* Digital */}
            <div className="col-md-6 col-lg-3">
              <div className="contact-service-card">

                <div className="contact-service-icon">
                  <i className="bi bi-code-slash"></i>
                </div>

                <h3>Solutions numériques</h3>

                <p>
                  Site web, application, plateforme de gestion
                  ou digitalisation de votre activité.
                </p>

                <Link to="/developpement">
                  En savoir plus
                  <i className="bi bi-arrow-right"></i>
                </Link>

              </div>
            </div>


            {/* Marketing */}
            <div className="col-md-6 col-lg-3">
              <div className="contact-service-card">

                <div className="contact-service-icon">
                  <i className="bi bi-megaphone"></i>
                </div>

                <h3>Marketing digital</h3>

                <p>
                  Développez votre visibilité, générez des prospects
                  et développez votre activité.
                </p>

                <Link to="/marketing-digital">
                  En savoir plus
                  <i className="bi bi-arrow-right"></i>
                </Link>

              </div>
            </div>


            {/* Commerce */}
            <div className="col-md-6 col-lg-3">
              <div className="contact-service-card">

                <div className="contact-service-icon">
                  <i className="bi bi-globe2"></i>
                </div>

                <h3>Commerce international</h3>

                <p>
                  Recherche de produits, fournisseurs et accompagnement
                  dans vos opérations internationales.
                </p>

                <Link to="/commerce-international">
                  En savoir plus
                  <i className="bi bi-arrow-right"></i>
                </Link>

              </div>
            </div>


            {/* Mobilité */}
            <div className="col-md-6 col-lg-3">
              <div className="contact-service-card">

                <div className="contact-service-icon">
                  <i className="bi bi-mortarboard"></i>
                </div>

                <h3>Mobilité académique</h3>

                <p>
                  Orientation et accompagnement dans vos projets
                  d'études et de mobilité internationale.
                </p>

                <Link to="/mobilite-academique">
                  En savoir plus
                  <i className="bi bi-arrow-right"></i>
                </Link>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CONTACT + FORMULAIRE
      ====================================================== */}
      <section
        className="skd-contact-form-section"
        id="contact-form"
      >

        <div className="container">

          <div className="row g-5 align-items-start">

            {/* Informations */}
            <div className="col-lg-5">

              <div className="contact-info-content">

                <span className="skd-section-kicker">
                  CONTACT
                </span>

                <h2>
                  Parlons directement avec notre équipe.
                </h2>

                <p>
                  Décrivez-nous votre besoin. Nous prendrons le temps
                  de comprendre votre situation et de vous proposer
                  une orientation adaptée.
                </p>


                {/* WhatsApp */}
                <a
                  href="https://wa.me/24105927486"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info-item"
                >
                  <div className="contact-info-icon whatsapp">
                    <i className="bi bi-whatsapp"></i>
                  </div>

                  <div>
                    <span>WhatsApp</span>
                    <strong>Écrire à SKD</strong>
                  </div>

                  <i className="bi bi-arrow-up-right ms-auto"></i>
                </a>


                {/* Email */}
                <a
                  href="mailto:servicekingdigital1@gmail.com"
                  className="contact-info-item"
                >
                  <div className="contact-info-icon">
                    <i className="bi bi-envelope"></i>
                  </div>

                  <div>
                    <span>Email</span>
                    <strong>
                      servicekingdigital1@gmail.com
                    </strong>
                  </div>

                  <i className="bi bi-arrow-up-right ms-auto"></i>
                </a>


                {/* Localisation */}
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="bi bi-geo-alt"></i>
                  </div>

                  <div>
                    <span>Localisation</span>
                    <strong>Libreville, Gabon</strong>
                  </div>
                </div>


                {/* Disponibilité */}
                <div className="contact-availability">

                  <span className="availability-dot"></span>

                  <div>
                    <strong>Nous sommes à votre écoute</strong>
                    <p>
                      Envoyez votre demande et notre équipe
                      vous répondra dès que possible.
                    </p>
                  </div>

                </div>

              </div>

            </div>


            {/* FORMULAIRE */}
            <div className="col-lg-7">

              <div className="contact-form-card">

                <div className="contact-form-header">

                  <span>
                    DEMANDE DE CONTACT
                  </span>

                  <h2>
                    Comment pouvons-nous vous aider ?
                  </h2>

                  <p>
                    Remplissez le formulaire ci-dessous.
                    Les champs marqués d'un * sont obligatoires.
                  </p>

                </div>


                <form>

                  <div className="row g-4">

                    {/* Nom */}
                    <div className="col-md-6">

                      <label htmlFor="name">
                        Nom complet *
                      </label>

                      <div className="contact-input-wrapper">
                        <i className="bi bi-person"></i>

                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Votre nom"
                          required
                        />
                      </div>

                    </div>


                    {/* Email */}
                    <div className="col-md-6">

                      <label htmlFor="email">
                        Adresse email *
                      </label>

                      <div className="contact-input-wrapper">
                        <i className="bi bi-envelope"></i>

                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="vous@exemple.com"
                          required
                        />
                      </div>

                    </div>


                    {/* Téléphone */}
                    <div className="col-md-6">

                      <label htmlFor="phone">
                        Téléphone
                      </label>

                      <div className="contact-input-wrapper">
                        <i className="bi bi-telephone"></i>

                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="+241 ..."
                        />
                      </div>

                    </div>


                    {/* Service */}
                    <div className="col-md-6">

                      <label htmlFor="service">
                        Service recherché *
                      </label>

                      <div className="contact-input-wrapper">
                        <i className="bi bi-grid"></i>

                        <select
                          id="service"
                          name="service"
                          defaultValue=""
                          required
                        >
                          <option value="" disabled>
                            Choisir un service
                          </option>

                          <option value="digital">
                            Solutions numériques
                          </option>

                          <option value="marketing">
                            Marketing digital
                          </option>

                          <option value="commerce">
                            Commerce international
                          </option>

                          <option value="mobilite">
                            Mobilité académique
                          </option>

                          <option value="autre">
                            Autre demande
                          </option>
                        </select>
                      </div>

                    </div>


                    {/* Sujet */}
                    <div className="col-12">

                      <label htmlFor="subject">
                        Sujet
                      </label>

                      <div className="contact-input-wrapper">
                        <i className="bi bi-chat-left-text"></i>

                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          placeholder="Ex : Création d'un site web"
                        />
                      </div>

                    </div>


                    {/* Message */}
                    <div className="col-12">

                      <label htmlFor="message">
                        Votre message *
                      </label>

                      <div className="contact-input-wrapper textarea-wrapper">
                        <i className="bi bi-pencil-square"></i>

                        <textarea
                          id="message"
                          name="message"
                          rows="6"
                          placeholder="Expliquez-nous votre projet ou votre besoin..."
                          required
                        ></textarea>
                      </div>

                    </div>


                    {/* Consentement */}
                    <div className="col-12">

                      <div className="contact-form-note">
                        <i className="bi bi-shield-check"></i>

                        <span>
                          Vos informations sont utilisées uniquement
                          pour répondre à votre demande.
                        </span>
                      </div>

                    </div>


                    {/* Bouton */}
                    <div className="col-12">

                      <button
                        type="submit"
                        className="btn-contact-submit"
                      >
                        Envoyer ma demande

                        <i className="bi bi-arrow-right"></i>
                      </button>

                    </div>

                  </div>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA FINAL
      ====================================================== */}
      <section className="skd-contact-cta">

        <div className="contact-cta-shape contact-cta-shape-1"></div>
        <div className="contact-cta-shape contact-cta-shape-2"></div>

        <div className="container position-relative">

          <div className="contact-cta-content">

            <span className="skd-section-kicker">
              SERVICE KING DIGITAL
            </span>

            <h2>
              Transformez vos idées
              <span> en opportunités.</span>
            </h2>

            <p>
              Un projet commence toujours par une discussion.
              Faites le premier pas avec SKD.
            </p>

            <div className="contact-cta-actions">

              <a
                href="mailto:servicekingdigital1@gmail.com"
                className="btn-skd-primary"
              >
                <i className="bi bi-envelope"></i>
                Nous écrire
              </a>

              <a
                href="https://wa.me/24105927486"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-skd-whatsapp"
              >
                <i className="bi bi-whatsapp"></i>
                WhatsApp
              </a>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}