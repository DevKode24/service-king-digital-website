
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

export default function Home() {
  const needs = [
    {
      icon: "bi-people",
      title: "Trouver plus de clients",
      description:
        "Améliorez votre visibilité et transformez vos contacts digitaux en opportunités commerciales.",
    },
    {
      icon: "bi-phone",
      title: "Être facilement joignable",
      description:
        "Centralisez WhatsApp, téléphone, localisation, réseaux sociaux et catalogue au même endroit.",
    },
    {
      icon: "bi-shop",
      title: "Digitaliser votre activité",
      description:
        "Passez d'une activité traditionnelle à une présence professionnelle et accessible en ligne.",
    },
    {
      icon: "bi-globe2",
      title: "Développer vos projets",
      description:
        "Importation, développement digital, marketing ou mobilité académique : nous construisons une solution adaptée.",
    },
  ];

  const offers = [
    {
      icon: "bi-phone",
      title: "Pack Digitalisation",
      subtitle: "Pour rendre votre activité visible et accessible.",
      price: "À partir de 75 000 FCFA",
      items: [
        "Page professionnelle",
        "Catalogue numérique",
        "WhatsApp",
        "QR Code",
        "Google Business",
        "Réseaux sociaux",
      ],
      cta: "Digitaliser mon activité",
    },
    {
      icon: "bi-megaphone",
      title: "Pack Marketing",
      subtitle: "Pour attirer des prospects et développer vos ventes.",
      price: "À partir de 100 000 FCFA",
      items: [
        "Création de contenus",
        "Publications",
        "Stratégie digitale",
        "Acquisition de prospects",
        "Suivi commercial",
      ],
      cta: "Développer mes ventes",
      featured: true,
    },
    {
      icon: "bi-box-seam",
      title: "Commerce International",
      subtitle: "Pour acheter et approvisionner votre activité.",
      price: "Sur devis",
      items: [
        "Recherche de produits",
        "Recherche fournisseurs",
        "Négociation",
        "Commandes internationales",
        "Suivi logistique",
      ],
      cta: "Mon projet d'importation",
    },
  ];

  const services = [
    {
      number: "01",
      icon: "bi-laptop",
      title: "Digitalisation",
      description:
        "Nous transformons les activités traditionnelles en expériences digitales simples, professionnelles et accessibles.",
      items: [
        "Pages professionnelles",
        "Catalogues numériques",
        "Sites web",
        "Solutions digitales",
      ],
      link: "/developpement",
    },
    {
      number: "02",
      icon: "bi-megaphone",
      title: "Marketing digital",
      description:
        "Nous développons votre visibilité et mettons en place des actions orientées acquisition et conversion.",
      items: [
        "Réseaux sociaux",
        "Contenus",
        "Publicité digitale",
        "Prospection",
      ],
      link: "/marketing-digital",
    },
    {
      number: "03",
      icon: "bi-globe2",
      title: "Commerce international",
      description:
        "Nous accompagnons les entrepreneurs dans leurs recherches de produits, fournisseurs et opérations d'achat.",
      items: [
        "Produits",
        "Fournisseurs",
        "Commandes",
        "Suivi",
      ],
      link: "/commerce-international",
    },
    {
      number: "04",
      icon: "bi-mortarboard",
      title: "Mobilité académique",
      description:
        "Nous accompagnons les étudiants dans la construction et la préparation de leurs projets d'études à l'international.",
      items: [
        "Orientation",
        "Opportunités",
        "Dossiers",
        "Accompagnement",
      ],
      link: "/mobilite-academique",
    },
  ];

  const advantages = [
    {
      icon: "bi-geo-alt",
      title: "Proximité",
      description:
        "Une approche adaptée aux réalités des entrepreneurs et professionnels de Libreville.",
    },
    {
      icon: "bi-code-slash",
      title: "Technologie",
      description:
        "Une expertise technique utilisée pour créer des solutions réellement utiles.",
    },
    {
      icon: "bi-bullseye",
      title: "Résultats",
      description:
        "Nous cherchons d'abord à résoudre un problème et à créer de la valeur.",
    },
    {
      icon: "bi-arrow-repeat",
      title: "Accompagnement",
      description:
        "Nous ne nous limitons pas à livrer un outil : nous vous accompagnons dans son utilisation.",
    },
  ];

  return (
    <>
      {/* =========================================================
          HERO
      ========================================================= */}
      <Hero />

      {/* =========================================================
          BESOINS
      ========================================================= */}
      <section className="skd-section">
        <div className="container">

          <div className="skd-section-title">
            <span className="eyebrow">Vous êtes entrepreneur ?</span>

            <h2>
              Votre activité mérite
              <br />
              d'être mieux connectée.
            </h2>

            <p>
              Que vous soyez commerçant, restaurateur, professionnel,
              entrepreneur ou porteur de projet, SKD vous aide à
              transformer vos besoins en solutions concrètes.
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

      {/* =========================================================
          OFFRES COMMERCIALES
      ========================================================= */}
      <section className="skd-section skd-section-light">
        <div className="container">

          <div className="skd-section-title">
            <span className="eyebrow">Nos offres</span>

            <h2>
              Des prestations concrètes,
              <br />
              avec des résultats visibles.
            </h2>

            <p>
              Choisissez une solution adaptée à votre besoin.
              Chaque prestation peut également être personnalisée.
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

                  <div className="skd-need-icon mb-3">
                    <i className={`bi ${offer.icon}`}></i>
                  </div>

                  <h3>{offer.title}</h3>

                  <p>{offer.subtitle}</p>

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
                    {offer.cta}
                    <i className="bi bi-whatsapp"></i>
                  </a>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =========================================================
          SMART DIGITAL CARD
      ========================================================= */}
      <section className="skd-section">
        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-6">

              <span className="eyebrow">
                Solution SKD
              </span>

              <h2>
                Votre carte professionnelle
                <br />
                devient digitale.
              </h2>

              <p className="lead">
                Avec la Smart Digital Card, un simple contact NFC,
                un QR Code ou un lien permet d'accéder instantanément
                à votre profil professionnel.
              </p>

              <div className="row g-3 mt-3">

                <div className="col-sm-6">
                  <div className="d-flex gap-3">
                    <i className="bi bi-wifi fs-4"></i>
                    <div>
                      <strong>NFC</strong>
                      <p className="mb-0">
                        Un simple contact pour partager votre profil.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="d-flex gap-3">
                    <i className="bi bi-qr-code fs-4"></i>
                    <div>
                      <strong>QR Code</strong>
                      <p className="mb-0">
                        Accessible depuis presque tous les smartphones.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="d-flex gap-3">
                    <i className="bi bi-whatsapp fs-4"></i>
                    <div>
                      <strong>WhatsApp</strong>
                      <p className="mb-0">
                        Transformez une visite en conversation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="d-flex gap-3">
                    <i className="bi bi-bar-chart"></i>
                    <div>
                      <strong>Profil digital</strong>
                      <p className="mb-0">
                        Présentez vos services, produits et contacts.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="mt-4">

                <a
                  href="https://wa.me/24105927486"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-skd-primary"
                >
                  Découvrir la Smart Digital Card
                  <i className="bi bi-arrow-right"></i>
                </a>

              </div>

            </div>

            <div className="col-lg-6">

              <div className="skd-service-card text-center">

                <div className="skd-need-icon mx-auto mb-4">
                  <i className="bi bi-phone"></i>
                </div>

                <h3>
                  NFC + QR Code + Profil digital
                </h3>

                <p>
                  Une seule identité digitale pour présenter
                  votre activité, vos services et vos moyens de contact.
                </p>

                <div className="mt-4">

                  <span className="badge text-bg-light me-2">
                    Professionnels
                  </span>

                  <span className="badge text-bg-light me-2">
                    Agents immobiliers
                  </span>

                  <span className="badge text-bg-light me-2">
                    Commerçants
                  </span>

                  <span className="badge text-bg-light">
                    Entrepreneurs
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          DOMAINES
      ========================================================= */}
      <section className="skd-section skd-section-light">
        <div className="container">

          <div className="skd-section-title">

            <span className="eyebrow">
              Nos domaines
            </span>

            <h2>
              Une entreprise,
              <br />
              plusieurs solutions.
            </h2>

            <p>
              SKD intervient dans plusieurs domaines complémentaires
              pour accompagner les entrepreneurs, entreprises et étudiants.
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
                    Découvrir
                    <i className="bi bi-arrow-right"></i>
                  </Link>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =========================================================
          PROCESSUS COMMERCIAL
      ========================================================= */}
      <section className="skd-section">
        <div className="container">

          <div className="skd-section-title">

            <span className="eyebrow">
              Notre méthode
            </span>

            <h2>
              Du besoin à la solution.
            </h2>

            <p>
              Nous privilégions une approche simple, transparente
              et orientée vers la réalisation.
            </p>

          </div>

          <div className="row g-4">

            <div className="col-md-3">
              <div className="skd-need-card text-center">
                <div className="skd-need-icon mx-auto">
                  <span>01</span>
                </div>

                <h3>Échange</h3>

                <p>
                  Nous comprenons votre activité, votre problème
                  et votre objectif.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="skd-need-card text-center">
                <div className="skd-need-icon mx-auto">
                  <span>02</span>
                </div>

                <h3>Proposition</h3>

                <p>
                  Nous définissons une solution adaptée à votre
                  besoin et à votre budget.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="skd-need-card text-center">
                <div className="skd-need-icon mx-auto">
                  <span>03</span>
                </div>

                <h3>Réalisation</h3>

                <p>
                  Après validation, nous réalisons et mettons
                  en place la solution.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="skd-need-card text-center">
                <div className="skd-need-icon mx-auto">
                  <span>04</span>
                </div>

                <h3>Accompagnement</h3>

                <p>
                  Nous vous aidons à utiliser la solution
                  et à en tirer de la valeur.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          POURQUOI SKD
      ========================================================= */}
      <section className="skd-section skd-section-light">
        <div className="container">

          <div className="skd-section-title">

            <span className="eyebrow">
              Pourquoi SKD ?
            </span>

            <h2>
              La technologie au service
              <br />
              de votre activité.
            </h2>

          </div>

          <div className="row g-4">

            {advantages.map((advantage) => (
              <div
                className="col-md-6 col-lg-3"
                key={advantage.title}
              >

                <div className="skd-need-card">

                  <div className="skd-need-icon">
                    <i className={`bi ${advantage.icon}`}></i>
                  </div>

                  <h3>{advantage.title}</h3>

                  <p>{advantage.description}</p>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =========================================================
          CTA FINAL
      ========================================================= */}
      <section className="skd-cta">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-8">

              <span className="eyebrow">
                Parlons de votre projet
              </span>

              <h2>
                Vous avez un besoin ?
                <br />
                Nous avons une solution.
              </h2>

              <p>
                Digitalisation, marketing, commerce international,
                développement ou mobilité académique : expliquez-nous
                votre besoin et construisons la bonne solution.
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
                Parler à SKD
              </a>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}
