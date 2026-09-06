import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="skd-footer">
     

      {/* MAIN FOOTER */}
      <div className="skd-footer-main">
        <div className="container">
          <div className="row g-5">

            {/* BRAND */}
            <div className="col-lg-4 col-md-12">
              <div className="skd-footer-brand">

                <Link to="/" className="skd-footer-logo">
                  SKD<span>.</span>
                </Link>

                <p className="skd-footer-description">
                  Service King Digital accompagne les entreprises,
                  organisations, entrepreneurs, étudiants et porteurs de
                  projets dans leur transformation numérique, leur
                  développement commercial et leurs projets internationaux.
                </p>

                <div className="skd-footer-location">
                  <div className="skd-footer-contact-icon">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>

                  <div>
                    <span>Notre localisation</span>
                    <strong>Libreville, Gabon</strong>
                  </div>
                </div>

                <div className="skd-footer-socials">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="skd-social-link"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>

                  <a
                    href="#"
                    aria-label="Instagram"
                    className="skd-social-link"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>

                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="skd-social-link"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>

                  <a
                    href="#"
                    aria-label="TikTok"
                    className="skd-social-link"
                  >
                    <i className="bi bi-tiktok"></i>
                  </a>

                  <a
                    href="#"
                    aria-label="YouTube"
                    className="skd-social-link"
                  >
                    <i className="bi bi-youtube"></i>
                  </a>
                </div>

              </div>
            </div>

            {/* SOLUTIONS */}
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="skd-footer-column">
                <h3>Solutions</h3>

                <ul>
                  <li>
                    <Link to="/developpement">
                      Solutions numériques
                    </Link>
                  </li>

                  <li>
                    <Link to="/developpement">
                      Développement web
                    </Link>
                  </li>

                  <li>
                    <Link to="/developpement">
                      Applications
                    </Link>
                  </li>

                  <li>
                    <Link to="/developpement">
                      Plateformes de gestion
                    </Link>
                  </li>

                  <li>
                    <Link to="/developpement">
                      Digitalisation
                    </Link>
                  </li>

                  <li>
                    <Link to="/developpement">
                      Support technique
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* MARKETING & COMMERCE */}
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="skd-footer-column">
                <h3>Business</h3>

                <ul>
                  <li>
                    <Link to="/marketing-digital">
                      Marketing digital
                    </Link>
                  </li>

                  <li>
                    <Link to="/marketing-digital">
                      Réseaux sociaux
                    </Link>
                  </li>

                  <li>
                    <Link to="/marketing-digital">
                      Création de contenus
                    </Link>
                  </li>

                  <li>
                    <Link to="/marketing-digital">
                      Acquisition clients
                    </Link>
                  </li>

                  <li>
                    <Link to="/commerce-international">
                      Commerce international
                    </Link>
                  </li>

                  <li>
                    <Link to="/commerce-international">
                      Recherche fournisseurs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* MOBILITÉ & SKD */}
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="skd-footer-column">
                <h3>Accompagnement</h3>

                <ul>
                  <li>
                    <Link to="/mobilite-academique">
                      Mobilité académique
                    </Link>
                  </li>

                  <li>
                    <Link to="/mobilite-academique">
                      Études à l'étranger
                    </Link>
                  </li>

                  <li>
                    <Link to="/mobilite-academique">
                      Orientation
                    </Link>
                  </li>

                  <li>
                    <Link to="/a-propos">
                      À propos de SKD
                    </Link>
                  </li>

                  <li>
                    <Link to="/services">
                      Nos services
                    </Link>
                  </li>

                  <li>
                    <Link to="/contact">
                      Nous contacter
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* CONTACT */}
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="skd-footer-column">
                <h3>Contact</h3>

                <div className="skd-footer-contact-list">

                  <a href="mailto:servicekingdigital1@gmail.com">
                    <i className="bi bi-envelope-fill"></i>
                    <span>
                      servicekingdigital1@gmail.com
                    </span>
                  </a>

                  <a href="tel:+24165927486">
                    <i className="bi bi-telephone-fill"></i>
                    <span>
                      +241 65 92 74 86 
                    </span>
                  </a>
                   <a href="tel:+24174549734">
                    <i className="bi bi-telephone-fill"></i>
                    <span>
                     +241 74 54 97 34
                    </span>
                  </a>

                  <a
                    href="https://wa.me/24165927486"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-whatsapp"></i>
                    <span>
                      Écrire sur WhatsApp
                    </span>
                  </a>

                </div>

                <Link
                  to="/contact"
                  className="skd-footer-contact-btn"
                >
                  Demander un devis
                  <i className="bi bi-arrow-up-right"></i>
                </Link>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="skd-footer-bottom">
        <div className="container">
          <div className="skd-footer-bottom-inner">

            <div className="skd-footer-copyright">
              © {currentYear}{" "}
              <strong>Service King Digital — SKD</strong>.
              Tous droits réservés.
            </div>

            <div className="skd-footer-legal">
              <Link to="/mentions-legales">
                Mentions légales
              </Link>

              <span></span>

              <Link to="/confidentialite">
                Politique de confidentialité
              </Link>

              <span></span>

              <Link to="/conditions">
                Conditions générales
              </Link>
            </div>

            <div className="skd-footer-signature">
              <span>Numériseur.</span>
              <span>Développeur.</span>
              <span>Connecteur.</span>
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
}