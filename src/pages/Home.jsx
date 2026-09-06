import { Link } from "react-router-dom";
import Hero from "../components/Hero";

export default function Home() {
  const needs = [
    {
      icon: "bi-people",
      title: "Trouver plus de clients",
      description:
        "Développez votre visibilité et transformez votre présence numérique en opportunités commerciales.",
    },
    {
      icon: "bi-laptop",
      title: "Digitaliser votre activité",
      description:
        "Mettez en place des outils numériques simples pour améliorer votre organisation et votre efficacité.",
    },
    {
      icon: "bi-globe2",
      title: "Acheter à l'international",
      description:
        "Soyez accompagné dans la recherche de produits, fournisseurs et opérations d'approvisionnement.",
    },
    {
      icon: "bi-mortarboard",
      title: "Étudier à l'étranger",
      description:
        "Structurez votre projet académique et bénéficiez d'un accompagnement dans vos démarches.",
    },
  ];

  const services = [
    {
      number: "01",
      icon: "bi-code-slash",
      title: "Solutions numériques",
      description:
        "Nous concevons des solutions numériques adaptées aux besoins réels de votre activité.",
      items: [
        "Sites web",
        "Applications web et mobiles",
        "Plateformes de gestion",
        "Digitalisation des processus",
      ],
      link: "/developpement",
    },
    {
      number: "02",
      icon: "bi-megaphone",
      title: "Marketing digital",
      description:
        "Nous vous aidons à développer votre visibilité, attirer des prospects et générer des opportunités.",
      items: [
        "Réseaux sociaux",
        "Création de contenus",
        "Publicité digitale",
        "Acquisition de prospects",
      ],
      link: "/marketing-digital",
    },
    {
      number: "03",
      icon: "bi-box-seam",
      title: "Commerce international",
      description:
        "Nous facilitons vos projets d'achat et d'approvisionnement auprès de fournisseurs internationaux.",
      items: [
        "Recherche de produits",
        "Recherche de fournisseurs",
        "Commandes internationales",
        "Suivi logistique",
      ],
      link: "/commerce-international",
    },
    {
      number: "04",
      icon: "bi-airplane",
      title: "Mobilité académique",
      description:
        "Nous accompagnons les étudiants dans leurs projets d'études et leur mobilité internationale.",
      items: [
        "Orientation académique",
        "Recherche d'opportunités",
        "Préparation des dossiers",
        "Accompagnement administratif",
      ],
      link: "/mobilite-academique",
    },
  ];

  const offers = [
    {
      title: "Pack Digitalisation",
      price: "À partir de 75 000 FCFA",
      items: [
        "Page professionnelle",
        "Catalogue numérique",
        "WhatsApp",
        "QR Code",
        "Google Business",
        "Réseaux sociaux",
      ],
    },
    {
      title: "Pack Marketing",
      price: "À partir de 100 000 FCFA",
      items: [
        "Création de contenus",
        "Publications",
        "Stratégie digitale",
        "Acquisition",
        "Suivi des prospects",
      ],
      featured: true,
    },
    {
      title: "Pack Commerce International",
      price: "Sur devis",
      items: [
        "Recherche de produits",
        "Recherche fournisseurs",
        "Commandes",
        "Suivi",
        "Accompagnement",
      ],
    },
  ];

  return (
    <>
      {/* HERO */}
      <Hero />

      {/* BESOINS */}
      <section className="skd-section">
        <div className="container">

          <div className="skd-section-title">
            <span className="eyebrow">Votre besoin</span>

            <h2>
              Vous avez un projet ?
              <br />
              Nous pouvons vous aider.
            </h2>

            <p>
              SKD transforme vos besoins en solutions concrètes,
              adaptées à votre activité, votre budget et vos objectifs.
            </p>
          </div>

          <div className="row g-4">
            {needs.map((need) => (
              <div className="col-md-6 col-lg-3" key={need.title}>
                <div className="skd-need-card">

                  <div className="skd-need-icon">
                    <i className={`bi ${need.icon}`}></i>
                  </div>

                  <h3>{need.title}</h3>

                  <p>{need.description}</p>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="skd-section skd-section-light">
        <div className="container">

          <div className="skd-section-title">
            <span className="eyebrow">Nos domaines</span>

            <h2>
              Des solutions pour développer votre activité
            </h2>

            <p>
              Quatre domaines d'intervention pour répondre aux
              principaux besoins de nos clients.
            </p>
          </div>

          <div className="row g-4">
            {services.map((service) => (
              <div className="col-md-6" key={service.number}>

                <div className="skd-service-card">

                  <span className="skd-service-number">
                    {service.number}
                  </span>

                  <div className="skd-service-icon">
                    <i className={`bi ${service.icon}`}></i>
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <ul className="skd-service-list">
                    {service.items.map((item) => (
                      <li key={item}>
                        <i className="bi bi-check2"></i>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={service.link}
                    className="btn-skd-outline"
                  >
                    En savoir plus
                    <i className="bi bi-arrow-right"></i>
                  </Link>

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* OFFRES */}
      <section className="skd-section">
        <div className="container">

          <div className="skd-section-title">
            <span className="eyebrow">Nos offres</span>

            <h2>
              Des prestations concrètes,
              pas seulement des promesses.
            </h2>

            <p>
              Choisissez une solution adaptée à votre besoin
              ou contactez-nous pour construire une offre personnalisée.
            </p>
          </div>

          <div className="row g-4">
            {offers.map((offer) => (
              <div className="col-lg-4" key={offer.title}>

                <div
                  className={`skd-offer-card ${
                    offer.featured ? "featured" : ""
                  }`}
                >

                  {offer.featured && (
                    <span className="badge text-bg-primary mb-3">
                      Offre populaire
                    </span>
                  )}

                  <h3>{offer.title}</h3>

                  <div className="skd-offer-price">
                    {offer.price}
                  </div>

                  <ul className="skd-service-list">
                    {offer.items.map((item) => (
                      <li key={item}>
                        <i className="bi bi-check-circle-fill"></i>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://wa.me/24105927486"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-skd-primary w-100"
                  >
                    Demander ce service
                    <i className="bi bi-arrow-right"></i>
                  </a>

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* POURQUOI SKD */}
      <section className="skd-section skd-section-light">
        <div className="container">

          <div className="skd-section-title">
            <span className="eyebrow">Pourquoi SKD ?</span>

            <h2>
              Une expertise pensée pour votre réalité.
            </h2>

            <p>
              Nous combinons technologie, proximité et vision
              commerciale pour créer des solutions réellement utiles.
            </p>
          </div>

          <div className="row g-4">

            <div className="col-md-6 col-lg-3">
              <div className="skd-need-card">
                <div className="skd-need-icon">
                  <i className="bi bi-geo-alt"></i>
                </div>

                <h3>Proximité</h3>

                <p>
                  Basés à Libreville, nous comprenons les réalités
                  du marché local.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="skd-need-card">
                <div className="skd-need-icon">
                  <i className="bi bi-cpu"></i>
                </div>

                <h3>Expertise technologique</h3>

                <p>
                  Nous associons développement logiciel et outils
                  numériques pour résoudre des problèmes concrets.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="skd-need-card">
                <div className="skd-need-icon">
                  <i className="bi bi-bullseye"></i>
                </div>

                <h3>Orientation résultats</h3>

                <p>
                  Notre objectif n'est pas seulement de livrer un outil,
                  mais de créer de la valeur pour votre activité.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="skd-need-card">
                <div className="skd-need-icon">
                  <i className="bi bi-globe2"></i>
                </div>

                <h3>Vision internationale</h3>

                <p>
                  Nous connectons les projets locaux à de nouvelles
                  opportunités régionales et internationales.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="skd-cta">
        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-8">
              <h2>Parlons de votre projet.</h2>

              <p>
                Vous avez une idée, un problème à résoudre ou une
                activité à développer ? Échangeons et trouvons
                ensemble une solution adaptée.
              </p>
            </div>

            <div className="col-lg-4 text-lg-end">

              <a
                href="https://wa.me/24105927486"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-skd-whatsapp"
              >
                <i className="bi bi-whatsapp"></i>
                Demander un devis
              </a>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}