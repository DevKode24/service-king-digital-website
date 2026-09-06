import { Link } from "react-router-dom";

export default function Marketing() {
  const expertise = [
    {
      icon: "bi-megaphone",
      number: "01",
      title: "Médias payants",
      description:
        "Nous concevons et pilotons vos campagnes publicitaires pour générer visibilité, prospects et ventes.",
      items: [
        "Meta Ads",
        "Google Ads",
        "LinkedIn Ads",
        "Campagnes de conversion",
        "Retargeting",
      ],
    },
    {
      icon: "bi-search",
      number: "02",
      title: "SEO & GEO",
      description:
        "Développez votre visibilité dans les moteurs de recherche et préparez votre marque aux nouveaux usages de recherche.",
      items: [
        "Audit SEO",
        "Référencement naturel",
        "Stratégie de contenu",
        "SEO local",
        "GEO / visibilité IA",
      ],
    },
    {
      icon: "bi-palette",
      number: "03",
      title: "Stratégie créative",
      description:
        "Nous transformons vos offres en messages, contenus et campagnes capables de capter l'attention.",
      items: [
        "Positionnement",
        "Direction créative",
        "Copywriting",
        "Visuels publicitaires",
        "Campagnes commerciales",
      ],
    },
    {
      icon: "bi-instagram",
      number: "04",
      title: "Réseaux sociaux",
      description:
        "Construisez une présence sociale cohérente qui renforce votre image et nourrit votre acquisition.",
      items: [
        "Stratégie social media",
        "Calendrier éditorial",
        "Création de contenus",
        "Community management",
        "Reporting",
      ],
    },
    {
      icon: "bi-bar-chart-line",
      number: "05",
      title: "Data & Analytics",
      description:
        "Nous transformons vos données marketing en décisions concrètes pour améliorer vos performances.",
      items: [
        "Google Analytics",
        "Tracking",
        "KPI",
        "Tableaux de bord",
        "Analyse des performances",
      ],
    },
    {
      icon: "bi-diagram-3",
      number: "06",
      title: "CRM & Conversion",
      description:
        "Ne laissez plus vos prospects se perdre. Structurez leur parcours jusqu'à la conversion et la fidélisation.",
      items: [
        "Gestion des prospects",
        "Automatisation",
        "Parcours client",
        "Relances",
        "Fidélisation",
      ],
    },
  ];

  const objectives = [
    {
      icon: "bi-eye",
      title: "Gagner en visibilité",
      text: "Faites connaître votre marque auprès des bonnes audiences.",
    },
    {
      icon: "bi-person-plus",
      title: "Générer des prospects",
      text: "Mettez en place un système capable d'alimenter votre pipeline commercial.",
    },
    {
      icon: "bi-cart-check",
      title: "Augmenter les ventes",
      text: "Optimisez votre parcours digital pour transformer davantage de visiteurs en clients.",
    },
    {
      icon: "bi-rocket-takeoff",
      title: "Lancer une offre",
      text: "Structurez une campagne de lancement autour d'une offre claire et mesurable.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Diagnostiquer",
      text: "Nous analysons votre activité, votre marché, vos audiences et votre écosystème digital.",
    },
    {
      number: "02",
      title: "Stratégiser",
      text: "Nous définissons les canaux, messages, offres et indicateurs prioritaires.",
    },
    {
      number: "03",
      title: "Déployer",
      text: "Nous lançons les campagnes, contenus, optimisations et actions commerciales.",
    },
    {
      number: "04",
      title: "Mesurer",
      text: "Nous suivons les données pour comprendre ce qui fonctionne réellement.",
    },
    {
      number: "05",
      title: "Optimiser",
      text: "Nous améliorons continuellement le système pour rechercher davantage de performance.",
    },
  ];

  const sectors = [
    "PME & entreprises",
    "Startups",
    "E-commerce",
    "Établissements scolaires",
    "Immobilier",
    "Services professionnels",
    "Commerce",
    "Associations & organisations",
  ];

  const faqs = [
    {
      question: "SKD fait-il uniquement de la gestion des réseaux sociaux ?",
      answer:
        "Non. Notre approche va au-delà de la publication de contenus. Nous pouvons intervenir sur la stratégie, l'acquisition publicitaire, le référencement, la création, la génération de prospects, la donnée et la conversion.",
    },
    {
      question: "Pouvez-vous travailler avec une entreprise qui débute ?",
      answer:
        "Oui. Nous pouvons partir d'une présence digitale existante ou construire les premières fondations : positionnement, identité digitale, site, contenus, acquisition et suivi des prospects.",
    },
    {
      question: "Est-ce que SKD garantit un nombre de ventes ?",
      answer:
        "Non. Les performances dépendent de nombreux facteurs : offre, marché, budget, concurrence, saisonnalité et qualité du parcours client. Notre rôle est de construire, mesurer et optimiser le système d'acquisition.",
    },
    {
      question: "Travaillez-vous uniquement avec des entreprises au Gabon ?",
      answer:
        "Non. SKD est basé à Libreville mais notre ambition est panafricaine. Nos solutions digitales peuvent accompagner des entreprises et organisations dans plusieurs marchés d'Afrique francophone.",
    },
    {
      question: "Pouvez-vous gérer plusieurs canaux en même temps ?",
      answer:
        "Oui. Nous pouvons coordonner réseaux sociaux, publicité, référencement, contenus, site web, génération de prospects et CRM dans une stratégie cohérente.",
    },
  ];

  return (
    <div className="skd-marketing-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="mk-hero">
        <div className="mk-hero-grid"></div>

        <div className="container position-relative">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-8">
              <div className="mk-eyebrow">
                <span className="mk-eyebrow-dot"></span>
                SKD GROWTH & DIGITAL MARKETING
              </div>

              <h1 className="mk-hero-title">
                Transformez votre marketing
                <span> en moteur de croissance.</span>
              </h1>

              <p className="mk-hero-text">
                Nous construisons des systèmes digitaux capables d'attirer
                les bonnes audiences, de générer des prospects et de soutenir
                durablement votre développement commercial.
              </p>

              <div className="mk-hero-actions">
                <Link to="/contact" className="mk-btn-primary">
                  Construire ma stratégie
                  <i className="bi bi-arrow-up-right"></i>
                </Link>

                <a
                  href="https://wa.me/241XXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mk-btn-outline"
                >
                  <i className="bi bi-whatsapp"></i>
                  Parler à un expert
                </a>
              </div>

              <div className="mk-hero-proof">
                <div>
                  <strong>Stratégie</strong>
                  <span>orientée business</span>
                </div>

                <div>
                  <strong>Acquisition</strong>
                  <span>multi-canaux</span>
                </div>

                <div>
                  <strong>Performance</strong>
                  <span>mesurable</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 d-none d-lg-block">
              <div className="mk-growth-card">
                <div className="mk-card-top">
                  <span>SKD GROWTH SYSTEM</span>
                  <i className="bi bi-three-dots"></i>
                </div>

                <div className="mk-growth-number">+∞</div>

                <p>
                  Un système pensé pour faire évoluer votre acquisition,
                  votre conversion et votre relation client.
                </p>

                <div className="mk-mini-chart">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="mk-growth-footer">
                  <span>
                    <i className="bi bi-graph-up-arrow"></i>
                    Optimisation continue
                  </span>
                  <strong>SKD</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          POSITIONNEMENT
      ===================================================== */}
      <section className="mk-positioning">
        <div className="container">
          <div className="row align-items-end mb-5">
            <div className="col-lg-7">
              <span className="mk-section-label">NOTRE APPROCHE</span>

              <h2 className="mk-section-title">
                Le marketing ne doit pas être
                <span> un centre de coûts.</span>
              </h2>
            </div>

            <div className="col-lg-5">
              <p className="mk-section-description">
                Il doit contribuer à votre croissance. C'est pourquoi SKD
                connecte stratégie, création, acquisition, données et
                conversion autour de vos objectifs commerciaux.
              </p>
            </div>
          </div>

          <div className="mk-funnel">
            <div className="mk-funnel-item">
              <div className="mk-funnel-icon">
                <i className="bi bi-broadcast"></i>
              </div>
              <strong>ATTIRER</strong>
              <span>Audience</span>
            </div>

            <div className="mk-funnel-line"></div>

            <div className="mk-funnel-item">
              <div className="mk-funnel-icon">
                <i className="bi bi-person-plus"></i>
              </div>
              <strong>CAPTER</strong>
              <span>Prospects</span>
            </div>

            <div className="mk-funnel-line"></div>

            <div className="mk-funnel-item">
              <div className="mk-funnel-icon">
                <i className="bi bi-cart-check"></i>
              </div>
              <strong>CONVERTIR</strong>
              <span>Clients</span>
            </div>

            <div className="mk-funnel-line"></div>

            <div className="mk-funnel-item">
              <div className="mk-funnel-icon">
                <i className="bi bi-heart"></i>
              </div>
              <strong>FIDÉLISER</strong>
              <span>Valeur client</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          GROWTH SYSTEM
      ===================================================== */}
      <section className="mk-system">
        <div className="container">
          <div className="mk-system-header text-center">
            <span className="mk-section-label">SKD GROWTH SYSTEM</span>

            <h2 className="mk-section-title">
              Un écosystème digital.
              <br />
              <span>Une stratégie. Un objectif : grandir.</span>
            </h2>

            <p>
              Nous ne considérons pas vos canaux digitaux comme des éléments
              isolés. Nous les faisons travailler ensemble.
            </p>
          </div>

          <div className="mk-system-orbit">
            <div className="mk-orbit-center">
              <span>SKD</span>
              <small>GROWTH</small>
            </div>

            <div className="mk-orbit-item mk-orbit-1">
              <i className="bi bi-megaphone"></i>
              Ads
            </div>

            <div className="mk-orbit-item mk-orbit-2">
              <i className="bi bi-search"></i>
              SEO
            </div>

            <div className="mk-orbit-item mk-orbit-3">
              <i className="bi bi-palette"></i>
              Création
            </div>

            <div className="mk-orbit-item mk-orbit-4">
              <i className="bi bi-bar-chart"></i>
              Data
            </div>

            <div className="mk-orbit-item mk-orbit-5">
              <i className="bi bi-diagram-3"></i>
              CRM
            </div>

            <div className="mk-orbit-item mk-orbit-6">
              <i className="bi bi-phone"></i>
              Social
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERTISE
      ===================================================== */}
      <section className="mk-expertise">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8">
              <span className="mk-section-label">NOS EXPERTISES</span>

              <h2 className="mk-section-title">
                Tout ce qu'il faut pour
                <span> accélérer votre croissance.</span>
              </h2>
            </div>
          </div>

          <div className="row g-4">
            {expertise.map((item) => (
              <div className="col-md-6 col-xl-4" key={item.number}>
                <article className="mk-expertise-card">
                  <div className="mk-card-number">{item.number}</div>

                  <div className="mk-expertise-icon">
                    <i className={`bi ${item.icon}`}></i>
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <ul>
                    {item.items.map((subItem) => (
                      <li key={subItem}>
                        <i className="bi bi-check2"></i>
                        {subItem}
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" className="mk-card-link">
                    En savoir plus
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          OBJECTIFS
      ===================================================== */}
      <section className="mk-objectives">
        <div className="container">
          <div className="row align-items-end mb-5">
            <div className="col-lg-7">
              <span className="mk-section-label">VOS OBJECTIFS</span>

              <h2 className="mk-section-title">
                Partons de votre
                <span> problème business.</span>
              </h2>
            </div>

            <div className="col-lg-5">
              <p className="mk-section-description">
                Chaque stratégie doit répondre à une problématique réelle.
                Nous adaptons nos actions à votre niveau de maturité et à vos
                objectifs.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {objectives.map((item, index) => (
              <div className="col-md-6 col-lg-3" key={item.title}>
                <div className="mk-objective-card">
                  <span className="mk-objective-index">
                    0{index + 1}
                  </span>

                  <i className={`bi ${item.icon}`}></i>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <Link to="/contact">
                    Construire une solution
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          DATA
      ===================================================== */}
      <section className="mk-data">
        <div className="container">
          <div className="mk-data-panel">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <span className="mk-section-label">DATA & PERFORMANCE</span>

                <h2>
                  Décider avec les données.
                  <span> Pas avec des intuitions.</span>
                </h2>

                <p>
                  Nous suivons les indicateurs qui comptent réellement pour
                  votre activité : trafic, prospects, coût d'acquisition,
                  conversion, engagement et performance des campagnes.
                </p>

                <Link to="/contact" className="mk-btn-primary">
                  Parlons de vos données
                  <i className="bi bi-arrow-up-right"></i>
                </Link>
              </div>

              <div className="col-lg-6">
                <div className="mk-dashboard">
                  <div className="mk-dashboard-header">
                    <span>SKD PERFORMANCE</span>
                    <span>LIVE MONITORING</span>
                  </div>

                  <div className="mk-dashboard-grid">
                    <div>
                      <small>VISIBILITÉ</small>
                      <strong>↑</strong>
                      <span>Audience</span>
                    </div>

                    <div>
                      <small>ACQUISITION</small>
                      <strong>+</strong>
                      <span>Prospects</span>
                    </div>

                    <div>
                      <small>CONVERSION</small>
                      <strong>↗</strong>
                      <span>Clients</span>
                    </div>

                    <div>
                      <small>FIDÉLISATION</small>
                      <strong>∞</strong>
                      <span>Valeur</span>
                    </div>
                  </div>

                  <div className="mk-dashboard-chart">
                    <div className="mk-chart-line"></div>

                    <div className="mk-chart-labels">
                      <span>JAN</span>
                      <span>FÉV</span>
                      <span>MAR</span>
                      <span>AVR</span>
                      <span>MAI</span>
                      <span>JUN</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTEURS
      ===================================================== */}
      <section className="mk-sectors">
        <div className="container">
          <div className="text-center mb-5">
            <span className="mk-section-label">SECTEURS</span>

            <h2 className="mk-section-title">
              Une expertise pensée pour
              <span> l'économie réelle.</span>
            </h2>

            <p className="mk-section-description mx-auto">
              Nous adaptons nos stratégies aux réalités de chaque activité,
              marché et audience.
            </p>
          </div>

          <div className="mk-sector-list">
            {sectors.map((sector, index) => (
              <div className="mk-sector-pill" key={sector}>
                <span>0{index + 1}</span>
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}
      <section className="mk-process">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-7">
              <span className="mk-section-label">NOTRE MÉTHODE</span>

              <h2 className="mk-section-title">
                Comprendre.
                <br />
                Construire.
                <br />
                <span>Mesurer. Optimiser.</span>
              </h2>
            </div>
          </div>

          <div className="mk-process-list">
            {process.map((item) => (
              <div className="mk-process-item" key={item.number}>
                <div className="mk-process-number">{item.number}</div>

                <div className="mk-process-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>

                <i className="bi bi-arrow-up-right"></i>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          OFFRES
      ===================================================== */}
      <section className="mk-offers">
        <div className="container">
          <div className="text-center mb-5">
            <span className="mk-section-label">SOLUTIONS SKD</span>

            <h2 className="mk-section-title">
              Commencez là où votre
              <span> entreprise en a besoin.</span>
            </h2>
          </div>

          <div className="row g-4 justify-content-center">
            <div className="col-lg-4">
              <div className="mk-offer-card">
                <span className="mk-offer-tag">START</span>

                <h3>Pack Visibilité</h3>

                <p>
                  Pour construire ou renforcer votre présence digitale.
                </p>

                <ul>
                  <li>Stratégie digitale</li>
                  <li>Réseaux sociaux</li>
                  <li>Création de contenus</li>
                  <li>Optimisation de présence</li>
                  <li>Conseils marketing</li>
                </ul>

                <Link to="/contact">
                  Demander une proposition
                  <i className="bi bi-arrow-up-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="mk-offer-card mk-offer-featured">
                <span className="mk-offer-tag">GROWTH</span>

                <h3>Pack Acquisition</h3>

                <p>
                  Pour les entreprises qui veulent générer régulièrement
                  des prospects.
                </p>

                <ul>
                  <li>Stratégie d'acquisition</li>
                  <li>Meta Ads / Google Ads</li>
                  <li>Landing page</li>
                  <li>Suivi des prospects</li>
                  <li>Reporting & optimisation</li>
                </ul>

                <Link to="/contact">
                  Construire mon système
                  <i className="bi bi-arrow-up-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="mk-offer-card">
                <span className="mk-offer-tag">SCALE</span>

                <h3>Marketing 360°</h3>

                <p>
                  Pour structurer un véritable écosystème marketing et
                  commercial.
                </p>

                <ul>
                  <li>Stratégie globale</li>
                  <li>Ads + SEO + Social</li>
                  <li>Création & contenus</li>
                  <li>Data & analytics</li>
                  <li>CRM & conversion</li>
                </ul>

                <Link to="/contact">
                  Parler à SKD
                  <i className="bi bi-arrow-up-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}
      <section className="mk-faq">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <span className="mk-section-label">FAQ</span>

              <h2 className="mk-section-title">
                Les questions que
                <span> vous vous posez.</span>
              </h2>

              <p className="mk-section-description">
                Vous souhaitez savoir comment nous pouvons intervenir sur
                votre activité ? Voici les principales questions.
              </p>
            </div>

            <div className="col-lg-7">
              <div className="accordion mk-accordion" id="marketingFaq">
                {faqs.map((faq, index) => (
                  <div className="accordion-item" key={faq.question}>
                    <h3 className="accordion-header">
                      <button
                        className={`accordion-button ${
                          index !== 0 ? "collapsed" : ""
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq-${index}`}
                        aria-expanded={index === 0}
                        aria-controls={`faq-${index}`}
                      >
                        <span>0{index + 1}</span>
                        {faq.question}
                      </button>
                    </h3>

                    <div
                      id={`faq-${index}`}
                      className={`accordion-collapse collapse ${
                        index === 0 ? "show" : ""
                      }`}
                      data-bs-parent="#marketingFaq"
                    >
                      <div className="accordion-body">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="mk-final-cta">
        <div className="mk-final-glow"></div>

        <div className="container position-relative">
          <div className="mk-final-content">
            <span className="mk-section-label">PRÊT À GRANDIR ?</span>

            <h2>
              Votre prochain niveau
              <span> commence maintenant.</span>
            </h2>

            <p>
              Parlons de votre activité, de vos objectifs et des opportunités
              que le digital peut créer pour vous.
            </p>

            <div className="mk-hero-actions justify-content-center">
              <Link to="/contact" className="mk-btn-primary">
                Démarrer avec SKD
                <i className="bi bi-arrow-up-right"></i>
              </Link>

              <a
                href="https://wa.me/241XXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="mk-btn-outline"
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