import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="skd-hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-9">
            <div className="skd-hero-content">

              <div className="skd-hero-eyebrow">
                <i className="bi bi-geo-alt"></i>
                Libreville, Gabon
              </div>

              <h1>
                Développez votre activité
                <span> avec le digital.</span>
              </h1>

              <p className="skd-hero-description">
                Service King Digital accompagne les entreprises,
                entrepreneurs, établissements et porteurs de projets
                dans leur développement grâce aux solutions numériques,
                au marketing digital, au commerce international et à
                l'accompagnement académique.
              </p>

              <div className="skd-hero-actions">
                <Link to="/services" className="btn-skd-primary">
                  Découvrir nos services
                  <i className="bi bi-arrow-right"></i>
                </Link>

                <a
                  href="https://wa.me/24105927486"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-skd-whatsapp"
                >
                  <i className="bi bi-whatsapp"></i>
                  Parlons sur WhatsApp
                </a>
              </div>

              <ul className="skd-trust-list">
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Solutions adaptées
                </li>

                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Accompagnement de proximité
                </li>

                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Orientation résultats
                </li>

                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Vision internationale
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}