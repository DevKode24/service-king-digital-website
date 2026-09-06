import { Link } from "react-router-dom";

export default function Development() {
  const services = [
    {
      icon: "bi-window-stack",
      title: "Sites web & plateformes",
      text: "Conception de sites institutionnels, plateformes web, catalogues numériques et expériences digitales modernes, rapides et adaptées à vos objectifs.",
      tags: ["Sites vitrines", "Portails", "Catalogues", "Plateformes"],
    },
    {
      icon: "bi-phone",
      title: "Applications web & mobiles",
      text: "Nous développons des applications sur mesure pour digitaliser vos services, simplifier vos opérations et offrir une meilleure expérience à vos utilisateurs.",
      tags: ["Web Apps", "Mobile", "PWA", "Applications métiers"],
    },
    {
      icon: "bi-diagram-3",
      title: "Logiciels métiers",
      text: "Transformez vos processus internes en outils numériques structurés : gestion, CRM, stocks, ventes, ressources, études, immobilier et bien plus.",
      tags: ["CRM", "ERP", "Gestion", "Automatisation"],
    },
    {
      icon: "bi-robot",
      title: "IA & automatisation",
      text: "Intégrez l'intelligence artificielle et l'automatisation dans vos activités pour réduire les tâches répétitives, accélérer vos opérations et améliorer votre productivité.",
      tags: ["IA", "Automatisation", "Chatbots", "Workflows"],
    },
    {
      icon: "bi-cart3",
      title: "E-commerce & marketplaces",
      text: "Création de boutiques en ligne et de plateformes commerciales permettant de présenter vos produits, recevoir des commandes et développer vos ventes.",
      tags: ["E-commerce", "Marketplace", "Paiement", "Commandes"],
    },
    {
      icon: "bi-arrow-repeat",
      title: "Refonte & modernisation",
      text: "Votre solution existe déjà ? Nous pouvons l'auditer, la moderniser, améliorer son interface, ses performances et son architecture.",
      tags: ["Audit", "Refonte", "Performance", "UX/UI"],
    },
  ];

  const modes = [
    {
      number: "01",
      icon: "bi-lightbulb",
      title: "Conseil & cadrage",
      text: "Nous transformons votre idée ou votre problème métier en une vision numérique claire, réaliste et structurée.",
    },
    {
      number: "02",
      icon: "bi-code-slash",
      title: "Conception & développement",
      text: "Nous concevons et développons votre solution avec une approche orientée qualité, sécurité, performance et évolutivité.",
    },
    {
      number: "03",
      icon: "bi-cloud-arrow-up",
      title: "Déploiement",
      text: "Nous préparons la mise en production et vous accompagnons dans le lancement de votre solution numérique.",
    },
    {
      number: "04",
      icon: "bi-shield-check",
      title: "Maintenance & évolution",
      text: "Nous assurons le suivi de votre plateforme et faisons évoluer votre solution avec les besoins de votre activité.",
    },
  ];

  const technologies = [
    "React",
    "Angular",
    "Java",
    "Spring Boot",
    "Node.js",
    "PostgreSQL",
    "REST API",
    "Cloud",
    "IA",
  ];

  const sectors = [
    {
      icon: "bi-building",
      title: "Entreprises & PME",
      text: "Digitalisation, logiciels métiers et automatisation.",
    },
    {
      icon: "bi-mortarboard",
      title: "Éducation",
      text: "Plateformes éducatives, gestion académique et admissions.",
    },
    {
      icon: "bi-shop",
      title: "Commerce",
      text: "E-commerce, catalogues, commandes et outils commerciaux.",
    },
    {
      icon: "bi-house",
      title: "Immobilier",
      text: "Plateformes immobilières, gestion des biens et prospects.",
    },
    {
      icon: "bi-rocket",
      title: "Startups",
      text: "MVP, plateformes digitales et produits numériques.",
    },
    {
      icon: "bi-bank",
      title: "Institutions",
      text: "Portails, digitalisation des processus et services en ligne.",
    },
  ];

  return (
    <div className="skd-development-page">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="dev-hero">
        <div className="dev-hero-grid"></div>

        <div className="container position-relative">
          <div className="row align-items-center g-5">

            <div className="col-lg-7">
              <span className="dev-eyebrow">
                <i className="bi bi-cpu me-2"></i>
                Technologie · Innovation · Transformation digitale
              </span>

              <h1 className="dev-hero-title">
                Nous transformons vos idées en
                <span> solutions numériques performantes.</span>
              </h1>

              <p className="dev-hero-text">
                SKD accompagne les entreprises, établissements, entrepreneurs
                et institutions dans la conception, le développement et
                l'évolution de leurs produits et systèmes numériques.
              </p>

              <div className="dev-hero-actions">
                <Link to="/contact" className="dev-btn-primary">
                  Démarrer un projet
                  <i className="bi bi-arrow-right"></i>
                </Link>

                <a
                  href="#expertise"
                  className="dev-btn-secondary"
                >
                  Découvrir notre expertise
                </a>
              </div>

              <div className="dev-hero-trust">
                <div>
                  <i className="bi bi-check-circle-fill"></i>
                  Solutions sur mesure
                </div>

                <div>
                  <i className="bi bi-check-circle-fill"></i>
                  Approche orientée métier
                </div>

                <div>
                  <i className="bi bi-check-circle-fill"></i>
                  Accompagnement continu
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="dev-hero-visual">

                <div className="dev-floating-card dev-card-top">
                  <div className="dev-mini-icon">
                    <i className="bi bi-code-slash"></i>
                  </div>
                  <div>
                    <strong>Development</strong>
                    <span>Solutions sur mesure</span>
                  </div>
                </div>

                <div className="dev-code-window">
                  <div className="dev-window-header">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="dev-code-content">
                    <div className="code-line">
                      <small>01</small>
                      <span className="code-purple">const</span>
                      <span className="code-blue"> solution</span>
                      <span> = </span>
                      <span className="code-green">SKD</span>
                    </div>

                    <div className="code-line">
                      <small>02</small>
                      <span className="code-purple">await</span>
                      <span> digitaliser(</span>
                    </div>

                    <div className="code-line indent">
                      <small>03</small>
                      <span className="code-orange">votreEntreprise</span>
                    </div>

                    <div className="code-line">
                      <small>04</small>
                      <span>)</span>
                    </div>

                    <div className="code-line">
                      <small>05</small>
                      <span className="code-green">
                        // Build. Scale. Evolve.
                      </span>
                    </div>
                  </div>

                  <div className="dev-code-status">
                    <span>
                      <i className="bi bi-circle-fill"></i>
                      Solution opérationnelle
                    </span>

                    <strong>100%</strong>
                  </div>
                </div>

                <div className="dev-floating-card dev-card-bottom">
                  <i className="bi bi-stars"></i>
                  <div>
                    <strong>Innovation</strong>
                    <span>IA · Cloud · Automatisation</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          POSITIONING
      ========================================================= */}
      <section className="dev-positioning">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-5">
              <span className="dev-section-kicker">
                Notre vision
              </span>

              <h2 className="dev-section-title">
                La technologie doit résoudre
                <span> de vrais problèmes.</span>
              </h2>
            </div>

            <div className="col-lg-7">
              <p className="dev-positioning-text">
                Nous ne développons pas uniquement des interfaces ou des
                lignes de code. Nous concevons des outils numériques capables
                de répondre aux réalités opérationnelles de votre organisation.
              </p>

              <p className="dev-positioning-text">
                Notre ambition est de contribuer à construire un écosystème
                technologique africain plus compétitif, en permettant aux
                entreprises et institutions de disposer de solutions modernes,
                accessibles et évolutives.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          EXPERTISE
      ========================================================= */}
      <section className="dev-expertise" id="expertise">
        <div className="container">

          <div className="dev-section-heading text-center">
            <span className="dev-section-kicker">
              Notre expertise
            </span>

            <h2 className="dev-section-title">
              Des solutions pour chaque étape
              <span> de votre transformation.</span>
            </h2>

            <p>
              De la première idée à la maintenance de votre plateforme,
              SKD vous accompagne avec une approche structurée.
            </p>
          </div>

          <div className="row g-4 mt-4">
            {services.map((service, index) => (
              <div className="col-md-6 col-xl-4" key={service.title}>
                <div className="dev-service-card">

                  <div className="dev-service-number">
                    0{index + 1}
                  </div>

                  <div className="dev-service-icon">
                    <i className={`bi ${service.icon}`}></i>
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.text}</p>

                  <div className="dev-service-tags">
                    {service.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <Link to="/contact" className="dev-card-link">
                    En savoir plus
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          MODE OPERATOIRE
      ========================================================= */}
      <section className="dev-method">
        <div className="container">

          <div className="row align-items-end mb-5">
            <div className="col-lg-7">
              <span className="dev-section-kicker">
                Notre méthode
              </span>

              <h2 className="dev-section-title">
                Un accompagnement de bout en bout.
              </h2>
            </div>

            <div className="col-lg-5">
              <p className="mb-0">
                Une solution performante ne repose pas uniquement sur
                la technologie. Elle repose sur une compréhension précise
                du besoin et une exécution rigoureuse.
              </p>
            </div>
          </div>

          <div className="dev-method-list">
            {modes.map((mode) => (
              <div className="dev-method-item" key={mode.number}>

                <div className="dev-method-number">
                  {mode.number}
                </div>

                <div className="dev-method-icon">
                  <i className={`bi ${mode.icon}`}></i>
                </div>

                <div className="dev-method-content">
                  <h3>{mode.title}</h3>
                  <p>{mode.text}</p>
                </div>

                <i className="bi bi-arrow-up-right dev-method-arrow"></i>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          TECHNOLOGIES
      ========================================================= */}
      <section className="dev-tech">
        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-5">
              <span className="dev-section-kicker">
                Technologie
              </span>

              <h2 className="dev-section-title">
                Des technologies modernes
                <span> pour des solutions durables.</span>
              </h2>

              <p>
                Nous sélectionnons les technologies en fonction du projet,
                de ses contraintes et de ses objectifs. L'enjeu n'est pas
                d'utiliser la technologie la plus récente, mais celle qui
                apporte le plus de valeur à votre organisation.
              </p>
            </div>

            <div className="col-lg-7">
              <div className="dev-tech-panel">

                <div className="dev-tech-panel-header">
                  <span>
                    <i className="bi bi-stack me-2"></i>
                    Notre environnement technologique
                  </span>

                  <span className="dev-tech-status">
                    <i className="bi bi-circle-fill"></i>
                    Évolutif
                  </span>
                </div>

                <div className="dev-tech-grid">
                  {technologies.map((technology) => (
                    <div className="dev-tech-item" key={technology}>
                      <i className="bi bi-check2-circle"></i>
                      {technology}
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          BUSINESS IMPACT
      ========================================================= */}
      <section className="dev-impact">
        <div className="container">

          <div className="dev-section-heading text-center">
            <span className="dev-section-kicker">
              Au-delà du développement
            </span>

            <h2 className="dev-section-title">
              Nous construisons des outils
              <span> qui créent de la valeur.</span>
            </h2>
          </div>

          <div className="row g-4 mt-4">

            <div className="col-md-4">
              <div className="dev-impact-card">
                <i className="bi bi-speedometer2"></i>
                <h3>Plus d'efficacité</h3>
                <p>
                  Réduisez les tâches manuelles et simplifiez les opérations
                  quotidiennes grâce à la digitalisation.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="dev-impact-card">
                <i className="bi bi-graph-up-arrow"></i>
                <h3>Plus de performance</h3>
                <p>
                  Centralisez vos données et disposez d'outils capables
                  d'accompagner la croissance de votre activité.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="dev-impact-card">
                <i className="bi bi-people"></i>
                <h3>Meilleure expérience</h3>
                <p>
                  Offrez à vos clients, collaborateurs et partenaires
                  des expériences numériques simples et professionnelles.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          SECTEURS
      ========================================================= */}
      <section className="dev-sectors">
        <div className="container">

          <div className="row align-items-end mb-5">
            <div className="col-lg-7">
              <span className="dev-section-kicker">
                Nos marchés
              </span>

              <h2 className="dev-section-title">
                Une expertise applicable
                <span> à de nombreux secteurs.</span>
              </h2>
            </div>

            <div className="col-lg-5">
              <p className="mb-0">
                Nous adaptons nos solutions aux réalités de chaque
                environnement métier.
              </p>
            </div>
          </div>

          <div className="row g-3">
            {sectors.map((sector) => (
              <div className="col-md-6 col-lg-4" key={sector.title}>
                <div className="dev-sector-card">
                  <div className="dev-sector-icon">
                    <i className={`bi ${sector.icon}`}></i>
                  </div>

                  <div>
                    <h3>{sector.title}</h3>
                    <p>{sector.text}</p>
                  </div>

                  <i className="bi bi-arrow-up-right"></i>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          CASE STUDIES / REALISATIONS
      ========================================================= */}
      <section className="dev-projects">
        <div className="container">

          <div className="dev-section-heading text-center">
            <span className="dev-section-kicker">
              Réalisations
            </span>

            <h2 className="dev-section-title">
              Des projets conçus pour le
              <span> terrain africain.</span>
            </h2>

            <p>
              Nos expériences couvrent différents besoins métiers,
              de la gestion d'activité aux plateformes digitales.
            </p>
          </div>

          <div className="row g-4 mt-4">

            <div className="col-lg-4">
              <div className="dev-project-card">
                <div className="dev-project-visual project-education">
                  <i className="bi bi-mortarboard"></i>
                </div>

                <div className="dev-project-body">
                  <span>Éducation</span>
                  <h3>Solutions numériques pour établissements</h3>
                  <p>
                    Digitalisation et outils adaptés aux besoins
                    des établissements d'enseignement.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="dev-project-card">
                <div className="dev-project-visual project-realestate">
                  <i className="bi bi-buildings"></i>
                </div>

                <div className="dev-project-body">
                  <span>Immobilier</span>
                  <h3>Plateformes de gestion immobilière</h3>
                  <p>
                    Outils permettant de présenter les biens,
                    gérer les annonces et développer les prospects.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="dev-project-card">
                <div className="dev-project-visual project-management">
                  <i className="bi bi-kanban"></i>
                </div>

                <div className="dev-project-body">
                  <span>Gestion</span>
                  <h3>Applications métiers sur mesure</h3>
                  <p>
                    Digitalisation des opérations et centralisation
                    des données pour améliorer le pilotage.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          AMBITION AFRICA
      ========================================================= */}
      <section className="dev-africa">
        <div className="container">

          <div className="dev-africa-card">

            <div className="dev-africa-glow"></div>

            <div className="row align-items-center position-relative">

              <div className="col-lg-8">
                <span className="dev-africa-kicker">
                  Notre ambition
                </span>

                <h2>
                  Construire depuis le Gabon
                  <br />
                  des solutions pour
                  <span> l'Afrique francophone.</span>
                </h2>

                <p>
                  SKD ambitionne de devenir une référence technologique
                  au Gabon et de participer à l'émergence d'un écosystème
                  numérique africain capable de concevoir, développer et
                  déployer des solutions compétitives à l'échelle régionale.
                </p>
              </div>

              <div className="col-lg-4">
                <div className="dev-africa-stats">
                  <div>
                    <strong>Gabon</strong>
                    <span>Notre base</span>
                  </div>

                  <div>
                    <strong>Afrique</strong>
                    <span>Notre marché</span>
                  </div>

                  <div>
                    <strong>Monde</strong>
                    <span>Notre horizon</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="dev-final-cta">
        <div className="container">

          <div className="dev-cta-card text-center">

            <span className="dev-section-kicker">
              Votre projet commence ici
            </span>

            <h2>
              Vous avez une idée ?
              <span> Construisons-la ensemble.</span>
            </h2>

            <p>
              Présentez-nous votre besoin. Nous vous aiderons à définir
              la meilleure approche technique et métier pour votre projet.
            </p>

            <div className="dev-cta-actions">
              <Link to="/contact" className="dev-btn-primary">
                Parler de mon projet
                <i className="bi bi-arrow-right"></i>
              </Link>

              <a
                href="https://wa.me/24165927486"
                target="_blank"
                rel="noopener noreferrer"
                className="dev-btn-whatsapp"
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
