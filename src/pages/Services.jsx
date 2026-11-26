import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";

export default function Services() {

  const serviceDomains = [
    {
      number: "01",
      icon: "bi-code-slash",
      title: "Solutions numériques & développement",
      description:
        "Nous concevons des solutions numériques adaptées aux besoins réels des entreprises, organisations et porteurs de projets.",
      image: "/images/services/developpement.jpg",
      link: "/developpement",
      services: [
        "Développement de sites web",
        "Applications web et mobiles",
        "Plateformes de gestion",
        "Digitalisation des processus",
        "Catalogues et vitrines numériques",
        "Solutions personnalisées",
        "Intégration d'outils numériques",
        "Maintenance et accompagnement technique",
      ],
    },

    {
      number: "02",
      icon: "bi-megaphone",
      title: "Marketing digital & développement commercial",
      description:
        "Nous transformons votre présence numérique en véritable outil de visibilité, d'acquisition et de développement commercial.",
      image: "/images/services/md.png",
      link: "/marketing-digital",
      services: [
        "Stratégie numérique",
        "Gestion des réseaux sociaux",
        "Création de contenus",
        "Communication digitale",
        "Génération de prospects",
        "Campagnes publicitaires",
        "Catalogues numériques",
        "Acquisition et suivi des clients",
      ],
    },

    {
      number: "03",
      icon: "bi-globe2",
      title: "Commerce international & approvisionnement",
      description:
        "Nous accompagnons entreprises et particuliers dans leurs projets d'achat, de sourcing et d'approvisionnement à l'international.",
      image: "/images/services/comi.jpg",
      link: "/commerce-international",
      services: [
        "Recherche de produits",
        "Recherche et identification de fournisseurs",
        "Achat sur plateformes internationales",
        "Accompagnement aux commandes",
        "Suivi des opérations",
        "Coordination logistique",
        "Accompagnement à l'importation",
      ],
    },

    {
      number: "04",
      icon: "bi-mortarboard",
      title: "Mobilité académique & accompagnement étudiant",
      description:
        "Nous accompagnons les étudiants et futurs étudiants dans leurs projets d'études et de mobilité internationale.",
      image: "/images/services/bourse.png",
      link: "/mobilite-academique",
      services: [
        "Orientation académique",
        "Recherche d'opportunités d'études",
        "Accompagnement dans les démarches",
        "Préparation des dossiers",
        "Communication avec les établissements",
        "Accompagnement administratif",
        "Préparation au départ",
      ],
    },
  ];

  const approach = [
    {
      number: "01",
      title: "Comprendre",
      icon: "bi-search",
      description:
        "Nous identifions votre problème, vos objectifs, vos priorités et les contraintes de votre activité.",
    },
    {
      number: "02",
      title: "Proposer",
      icon: "bi-lightbulb",
      description:
        "Nous construisons une solution adaptée à votre budget, votre réalité et vos objectifs.",
    },
    {
      number: "03",
      title: "Mettre en œuvre",
      icon: "bi-rocket-takeoff",
      description:
        "Nous déployons la solution et vous accompagnons dans sa mise en place et son utilisation.",
    },
    {
      number: "04",
      title: "Mesurer",
      icon: "bi-graph-up-arrow",
      description:
        "Nous suivons les résultats afin d'identifier les améliorations et les opportunités.",
    },
    {
      number: "05",
      title: "Développer",
      icon: "bi-arrow-up-right-circle",
      description:
        "Lorsque la solution fonctionne, nous l'améliorons et la faisons évoluer avec votre activité.",
    },
  ];

  const advantages = [
    {
      icon: "bi-geo-alt",
      title: "Une connaissance du marché local",
      text:
        "Basés à Libreville, nous comprenons les réalités et contraintes des entreprises opérant au Gabon.",
    },
    {
      icon: "bi-cpu",
      title: "Une expertise technologique",
      text:
        "Nous associons développement logiciel, outils numériques et stratégie pour créer des solutions concrètes.",
    },
    {
      icon: "bi-bullseye",
      title: "Une approche orientée résultats",
      text:
        "Nous ne cherchons pas simplement à livrer un outil. Nous cherchons à résoudre un problème et créer de la valeur.",
    },
    {
      icon: "bi-people",
      title: "Un accompagnement de proximité",
      text:
        "Nous travaillons avec nos clients avant, pendant et après la mise en œuvre de leurs projets.",
    },
    {
      icon: "bi-globe-americas",
      title: "Une vision internationale",
      text:
        "Nous voulons connecter les entreprises, étudiants et porteurs de projets du Gabon à davantage d'opportunités.",
    },
  ];

  return (
    <div className="skd-services-page">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="skd-services-hero">

        <div className="services-hero-shape services-hero-shape-1"></div>
        <div className="services-hero-shape services-hero-shape-2"></div>
        <div className="services-hero-shape services-hero-shape-3"></div>

        <div className="container position-relative">

          <div className="row align-items-center g-5">

            <div className="col-lg-7">

              <div className="services-eyebrow">
                <span></span>
                SERVICE KING DIGITAL
              </div>

              <h1>
                Des solutions pour
                <span> faire grandir vos projets.</span>
              </h1>

              <p>
                Nous aidons nos clients à mieux vendre, mieux communiquer,
                mieux s'organiser et saisir de nouvelles opportunités grâce
                au numérique, au marketing, au commerce international et
                à l'accompagnement académique.
              </p>

              <div className="services-hero-actions">

                <a
                  href="#domaines"
                  className="btn-skd-primary"
                >
                  Explorer nos services
                  <i className="bi bi-arrow-down"></i>
                </a>

                <Link
                  to="/contact"
                  className="btn-skd-outline-light"
                >
                  Parlons de votre projet
                  <i className="bi bi-arrow-right"></i>
                </Link>

              </div>

            </div>


            <div className="col-lg-5">

              <div className="services-hero-visual">

                <div className="services-orbit orbit-1"></div>
                <div className="services-orbit orbit-2"></div>

                <div className="services-main-image">

                  <img
                    src="/images/services/mr1.png"
                    alt="Services Service King Digital"
                  />

                </div>

                <div className="services-floating-box floating-box-1">
                  <i className="bi bi-lightning-charge-fill"></i>
                  <div>
                    <strong>Solutions concrètes</strong>
                    <span>Adaptées à votre réalité</span>
                  </div>
                </div>

                <div className="services-floating-box floating-box-2">
                  <i className="bi bi-arrow-up-right-circle-fill"></i>
                  <span>Créons de la valeur</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          MISSION
      ====================================================== */}
      <section className="skd-services-mission">

        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-6">

              <span className="skd-section-kicker">
                NOTRE MISSION
              </span>

              <h2>
                Le numérique doit être
                <span> utile, accessible et rentable.</span>
              </h2>

              <p>
                Chez SKD, nous pensons que la technologie n'est pas
                une fin en soi. Elle doit créer de la valeur pour votre
                activité.
              </p>

              <p>
                Nous combinons expertise technologique, accompagnement
                commercial et connaissance du marché local pour transformer
                les besoins de nos clients en résultats concrets.
              </p>

              <Link
                to="/a-propos"
                className="skd-text-link"
              >
                En savoir plus sur SKD
                <i className="bi bi-arrow-right"></i>
              </Link>

            </div>

            <div className="col-lg-6">

              <div className="mission-visual">

                <div className="mission-image-main">
                  <img
                    src="/images/services/mission.png"
                    alt="SKD accompagne les entreprises"
                  />
                </div>

                <div className="mission-card">

                  <i className="bi bi-quote"></i>

                  <p>
                    La technologie n'est pas une fin en soi.
                    Elle doit créer de la valeur pour votre activité.
                  </p>

                  <span>
                    — Service King Digital
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          DOMAINES
      ====================================================== */}
      <section
        className="skd-services-domains"
        id="domaines"
      >

        <div className="container">

          <div className="services-section-heading">

            <div>

              <span className="skd-section-kicker">
                NOS DOMAINES D'ACTIVITÉ
              </span>

              <h2>
                Une expertise au service
                <span> de vos ambitions.</span>
              </h2>

            </div>

            <p>
              Quatre domaines complémentaires pour répondre aux
              besoins des entreprises, entrepreneurs, étudiants
              et porteurs de projets.
            </p>

          </div>


          <div className="services-domain-grid">

            {serviceDomains.map((domain) => (
              <ServiceCard
                key={domain.number}
                number={domain.number}
                icon={domain.icon}
                title={domain.title}
                description={domain.description}
                image={domain.image}
                services={domain.services}
                link={domain.link}
              />
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          APPROCHE
      ====================================================== */}
      <section className="skd-services-approach">

        <div className="container">

          <div className="services-section-heading centered">

            <span className="skd-section-kicker">
              NOTRE APPROCHE
            </span>

            <h2>
              Comprendre. Construire.
              <span> Développer.</span>
            </h2>

            <p>
              Chaque projet commence par la compréhension du besoin.
              Nous analysons votre situation, vos objectifs et vos
              contraintes afin de proposer une solution réellement adaptée.
            </p>

          </div>


          <div className="approach-timeline">

            <div className="approach-line"></div>

            {approach.map((step) => (
              <div
                className="approach-step"
                key={step.number}
              >

                <div className="approach-number">
                  {step.number}
                </div>

                <div className="approach-icon">
                  <i className={`bi ${step.icon}`}></i>
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          POURQUOI SKD
      ====================================================== */}
      <section className="skd-services-advantages">

        <div className="container">

          <div className="row g-5">

            <div className="col-lg-5">

              <div className="advantages-sticky">

                <span className="skd-section-kicker">
                  POURQUOI CHOISIR SKD ?
                </span>

                <h2>
                  Plus qu'un prestataire,
                  <span> un partenaire.</span>
                </h2>

                <p>
                  Nous voulons construire des relations durables
                  avec nos clients en apportant une expertise
                  concrète et un accompagnement de proximité.
                </p>

                <Link
                  to="/contact"
                  className="btn-skd-primary"
                >
                  Travaillons ensemble
                  <i className="bi bi-arrow-right"></i>
                </Link>

              </div>

            </div>


            <div className="col-lg-7">

              <div className="advantages-list">

                {advantages.map((item, index) => (
                  <div
                    className="advantage-item"
                    key={item.title}
                  >

                    <div className="advantage-index">
                      0{index + 1}
                    </div>

                    <div className="advantage-icon">
                      <i className={`bi ${item.icon}`}></i>
                    </div>

                    <div className="advantage-content">

                      <h3>{item.title}</h3>

                      <p>{item.text}</p>

                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          VISION
      ====================================================== */}
      <section className="skd-services-vision">

        <div className="vision-shape vision-shape-1"></div>
        <div className="vision-shape vision-shape-2"></div>

        <div className="container position-relative">

          <div className="vision-content">

            <span className="skd-section-kicker">
              NOTRE VISION
            </span>

            <h2>
              Construire une entreprise
              <span> numérique africaine.</span>
            </h2>

            <p>
              Nous voulons construire une entreprise numérique africaine
              capable de fournir des services, solutions et produits
              numériques accessibles, performants et évolutifs.
            </p>

            <p>
              Notre ambition est de faire de SKD un partenaire de référence
              pour les entreprises, entrepreneurs, établissements et
              particuliers qui souhaitent se développer grâce au numérique
              et accéder à de nouvelles opportunités.
            </p>

            <div className="vision-signature">
              <strong>Numériseur.</strong>
              <strong>Développeur.</strong>
              <strong>Connecteur.</strong>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="skd-services-cta">

        <div className="services-cta-shape services-cta-shape-1"></div>
        <div className="services-cta-shape services-cta-shape-2"></div>

        <div className="container position-relative">

          <div className="services-cta-content">

            <span className="skd-section-kicker">
              SERVICE KING DIGITAL
            </span>

            <h2>
              Vous avez un projet ?
              <span> Construisons-le ensemble.</span>
            </h2>

            <p>
              Décrivez-nous votre besoin et découvrons comment SKD
              peut vous aider à transformer votre idée en opportunité.
            </p>

            <Link
              to="/contact"
              className="btn-skd-primary"
            >
              Démarrer une discussion
              <i className="bi bi-arrow-right"></i>
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}