import { Link } from "react-router-dom";

export default function Commerce() {
  const categories = [
    {
      icon: "bi-house-door",
      title: "Maison & mobilier",
      text: "Meubles, décoration, literie, rangement et équipements pour la maison.",
    },
    {
      icon: "bi-phone",
      title: "Électronique",
      text: "Produits électroniques, accessoires, équipements et composants.",
    },
    {
      icon: "bi-car-front",
      title: "Automobile",
      text: "Pièces, accessoires automobiles, équipements et produits de mobilité.",
    },
    {
      icon: "bi-tools",
      title: "Machines & équipements",
      text: "Machines industrielles, équipements professionnels et outils.",
    },
    {
      icon: "bi-bag",
      title: "Mode & accessoires",
      text: "Vêtements, sacs, accessoires et articles personnalisables.",
    },
    {
      icon: "bi-box-seam",
      title: "Emballage & stockage",
      text: "Solutions d'emballage, de stockage, de présentation et de mise en rayon.",
    },
  ];

  const steps = [
    {
      number: "01",
      icon: "bi-search",
      title: "Vous nous indiquez ce que vous cherchez",
      text: "Envoyez-nous un lien, une image, une référence, une quantité ou simplement une description du produit.",
    },
    {
      number: "02",
      icon: "bi-shield-check",
      title: "Nous recherchons les fournisseurs",
      text: "Nous analysons les offres disponibles, les caractéristiques du produit, les prix et les conditions proposées.",
    },
    {
      number: "03",
      icon: "bi-file-earmark-text",
      title: "Vous recevez votre devis",
      text: "SKD vous présente les coûts liés à l'achat et à l'approvisionnement afin que vous puissiez prendre votre décision.",
    },
    {
      number: "04",
      icon: "bi-credit-card",
      title: "Vous validez et nous avançons",
      text: "Après validation de la facture proforma et du paiement convenu, nous lançons l'opération.",
    },
    {
      number: "05",
      icon: "bi-box-arrow-up",
      title: "Nous suivons l'expédition",
      text: "Nous assurons le suivi de votre commande jusqu'à son acheminement vers le Gabon.",
    },
    {
      number: "06",
      icon: "bi-house-check",
      title: "Vous réceptionnez",
      text: "La commande est acheminée vers le lieu convenu selon les modalités définies au préalable.",
    },
  ];

  const services = [
    {
      icon: "bi-search",
      title: "Sourcing produits",
      text: "Vous avez un produit en tête ? Nous recherchons des offres correspondant à votre besoin.",
    },
    {
      icon: "bi-buildings",
      title: "Recherche fournisseurs",
      text: "Identification et analyse des fournisseurs selon votre produit, votre budget et vos exigences.",
    },
    {
      icon: "bi-chat-square-text",
      title: "Négociation",
      text: "Nous vous accompagnons dans les échanges commerciaux et la recherche des meilleures conditions possibles.",
    },
    {
      icon: "bi-cart-check",
      title: "Achat & commande",
      text: "Après validation, SKD coordonne l'opération d'achat conformément aux conditions convenues.",
    },
    {
      icon: "bi-ship",
      title: "Logistique internationale",
      text: "Organisation et suivi du transport selon le type de marchandise et le mode d'expédition.",
    },
    {
      icon: "bi-graph-up-arrow",
      title: "Approvisionnement professionnel",
      text: "Solutions adaptées aux entrepreneurs, commerces, entreprises et projets nécessitant des volumes plus importants.",
    },
  ];

  const transport = [
    {
      icon: "bi-airplane",
      title: "Transport aérien",
      value: "10 000 FCFA / kg",
      description:
        "Une solution rapide adaptée notamment aux produits légers et aux besoins urgents.",
      delay: "Environ 15 jours après le décollage en Chine*",
    },
    {
      icon: "bi-ship",
      title: "Transport maritime",
      value: "245 000 FCFA / CBM",
      description:
        "Une solution adaptée aux produits lourds, volumineux ou aux commandes importantes.",
      delay: "Environ 3 mois après le départ du bateau*",
    },
  ];

  const restrictions = [
    "Liquides",
    "Piles & batteries",
    "Téléphones",
    "Cosmétiques",
    "Montres",
    "Comprimés et poudres",
  ];

  const dropshippingBenefits = [
    {
      icon: "bi-box-seam",
      title: "Sans stock important",
      text: "Le modèle permet de commercialiser certains produits sans constituer un stock important à l'avance.",
    },
    {
      icon: "bi-cash-stack",
      title: "Moins de capital immobilisé",
      text: "Vous pouvez tester une offre avant d'investir dans des volumes importants.",
    },
    {
      icon: "bi-globe2",
      title: "Accès aux fournisseurs",
      text: "SKD vous accompagne dans la recherche et la coordination de l'approvisionnement.",
    },
    {
      icon: "bi-arrow-repeat",
      title: "Passage progressif au gros",
      text: "Un produit qui fonctionne peut ensuite faire l'objet d'un approvisionnement en plus grande quantité.",
    },
  ];

  const faqs = [
    {
      question: "Quels produits puis-je commander avec SKD ?",
      answer:
        "Nous pouvons étudier une large variété de produits : maison, mobilier, mode, électronique, automobile, emballage, machines, équipements professionnels et autres produits disponibles auprès de fournisseurs internationaux.",
    },
    {
      question: "Dois-je déjà avoir trouvé mon fournisseur ?",
      answer:
        "Non. Vous pouvez simplement nous envoyer une photo, un lien, une référence ou une description du produit que vous recherchez. Nous pouvons ensuite étudier les possibilités d'approvisionnement.",
    },
    {
      question: "Puis-je commander une petite quantité ?",
      answer:
        "Cela dépend du produit et des conditions du fournisseur. Nous étudions votre demande et vous indiquons les quantités minimales applicables lorsqu'elles existent.",
    },
    {
      question: "Quel est le coût du service SKD ?",
      answer:
        "La rémunération communiquée actuellement pour l'intermédiation est comprise entre 12 % et 15 % du montant total de l'achat, selon le type de produit et la complexité de la commande. Les frais de transport et autres coûts applicables sont présentés séparément dans le devis.",
    },
    {
      question: "Puis-je faire du dropshipping avec SKD ?",
      answer:
        "Oui, nous pouvons étudier des projets de vente sans stock et vous accompagner dans la recherche de produits et de fournisseurs. Les conditions dépendent du produit, du fournisseur et du marché ciblé.",
    },
    {
      question: "Combien de temps prend la livraison ?",
      answer:
        "Les délais dépendent du mode de transport, du fournisseur, de la marchandise et des opérations logistiques. À titre indicatif, les modalités actuellement communiquées par SKD sont d'environ 15 jours après décollage pour l'aérien et environ 3 mois après départ pour le maritime.",
    },
  ];

  return (
    <div className="skd-commerce-page">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="commerce-hero">
        <div className="commerce-hero-grid"></div>
        <div className="commerce-hero-glow commerce-hero-glow-1"></div>
        <div className="commerce-hero-glow commerce-hero-glow-2"></div>

        <div className="container position-relative">
          <div className="row align-items-center g-5">

            <div className="col-lg-7">
              <div className="commerce-eyebrow">
                <span className="commerce-eyebrow-dot"></span>
                COMMERCE INTERNATIONAL
              </div>

              <h1 className="commerce-hero-title">
                Achetez à
                <span> l'international.</span>
                <br />
                Nous nous occupons du reste.
              </h1>

              <p className="commerce-hero-text">
                De la recherche du produit jusqu'à son acheminement vers le
                Gabon, SKD vous accompagne dans vos opérations de sourcing,
                d'achat et d'approvisionnement international.
              </p>

              <div className="commerce-hero-actions">
                <a
                  href="https://wa.me/24165927486"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="commerce-btn commerce-btn-primary"
                >
                  <i className="bi bi-whatsapp"></i>
                  Demander un sourcing
                </a>

                <a
                  href="#fonctionnement"
                  className="commerce-btn commerce-btn-outline"
                >
                  Comment ça marche
                  <i className="bi bi-arrow-down"></i>
                </a>
              </div>

              <div className="commerce-hero-points">
                <div>
                  <i className="bi bi-check-circle-fill"></i>
                  Sourcing personnalisé
                </div>

                <div>
                  <i className="bi bi-check-circle-fill"></i>
                  Devis transparent
                </div>

                <div>
                  <i className="bi bi-check-circle-fill"></i>
                  Suivi de commande
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="commerce-hero-card">

                <div className="commerce-card-top">
                  <div>
                    <span>VOTRE PROJET</span>
                    <strong>Chine → Gabon</strong>
                  </div>

                  <div className="commerce-card-icon">
                    <i className="bi bi-globe2"></i>
                  </div>
                </div>

                <div className="commerce-route">
                  <div className="commerce-route-point">
                    <span className="route-dot"></span>
                    <div>
                      <small>Départ</small>
                      <strong>Chine 🇨🇳</strong>
                    </div>
                  </div>

                  <div className="commerce-route-line">
                    <i className="bi bi-airplane"></i>
                  </div>

                  <div className="commerce-route-point">
                    <span className="route-dot route-dot-end"></span>
                    <div>
                      <small>Destination</small>
                      <strong>Gabon 🇬🇦</strong>
                    </div>
                  </div>
                </div>

                <div className="commerce-card-status">
                  <div className="status-icon">
                    <i className="bi bi-shield-check"></i>
                  </div>

                  <div>
                    <strong>Un seul interlocuteur</strong>
                    <span>
                      Recherche · Achat · Logistique · Suivi
                    </span>
                  </div>
                </div>

                <div className="commerce-card-footer">
                  <span>Besoin d'un produit ?</span>
                  <strong>Parlons-en →</strong>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          INTRO / POSITIONING
      ====================================================== */}
      <section className="commerce-intro skd-commerce-section">
        <div className="container">

          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <span className="commerce-section-label">
                UNE APPROCHE SIMPLE
              </span>

              <h2 className="commerce-section-title">
                Vous cherchez un produit.
                <span> Nous trouvons la solution.</span>
              </h2>

              <p className="commerce-section-text">
                Pas besoin de maîtriser les plateformes internationales,
                les fournisseurs, les paiements ou la logistique. Vous nous
                présentez votre besoin et SKD vous accompagne dans la mise en
                place de votre opération d'approvisionnement.
              </p>
            </div>
          </div>

          <div className="row g-4 mt-4">

            <div className="col-md-4">
              <div className="commerce-mini-card">
                <div className="commerce-mini-icon">
                  <i className="bi bi-search"></i>
                </div>
                <span>01</span>
                <h3>Vous recherchez</h3>
                <p>
                  Un produit, une référence, une quantité ou une solution
                  d'approvisionnement.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="commerce-mini-card">
                <div className="commerce-mini-icon">
                  <i className="bi bi-bar-chart"></i>
                </div>
                <span>02</span>
                <h3>Nous comparons</h3>
                <p>
                  Les possibilités d'achat, les fournisseurs, les prix et les
                  coûts associés.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="commerce-mini-card">
                <div className="commerce-mini-icon">
                  <i className="bi bi-box-seam"></i>
                </div>
                <span>03</span>
                <h3>Vous recevez</h3>
                <p>
                  Une proposition claire avant de décider de lancer votre
                  commande.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          SERVICES
      ====================================================== */}
      <section className="commerce-services skd-commerce-section">
        <div className="container">

          <div className="row align-items-end mb-5">
            <div className="col-lg-7">
              <span className="commerce-section-label">
                NOS SOLUTIONS
              </span>

              <h2 className="commerce-section-title mb-0">
                Un accompagnement de
                <span> l'idée à la livraison.</span>
              </h2>
            </div>

            <div className="col-lg-5">
              <p className="commerce-section-text mb-0">
                Que vous soyez entrepreneur, commerçant, entreprise ou
                porteur de projet, nous adaptons l'approvisionnement à votre
                besoin.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {services.map((service, index) => (
              <div className="col-md-6 col-lg-4" key={service.title}>
                <div className="commerce-service-card">

                  <div className="commerce-service-number">
                    0{index + 1}
                  </div>

                  <div className="commerce-service-icon">
                    <i className={`bi ${service.icon}`}></i>
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.text}</p>

                  <span className="commerce-service-arrow">
                    <i className="bi bi-arrow-up-right"></i>
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =====================================================
          CATEGORIES
      ====================================================== */}
      <section className="commerce-categories skd-commerce-section">
        <div className="container">

          <div className="row align-items-center mb-5">
            <div className="col-lg-7">
              <span className="commerce-section-label">
                CE QUE NOUS POUVONS RECHERCHER
              </span>

              <h2 className="commerce-section-title mb-0">
                Des produits pour
                <span> différents secteurs.</span>
              </h2>
            </div>

            <div className="col-lg-5">
              <p className="commerce-section-text mb-0">
                Le sourcing peut concerner aussi bien des produits de
                consommation que des équipements professionnels ou industriels.
              </p>
            </div>
          </div>

          <div className="row g-3">
            {categories.map((category) => (
              <div className="col-6 col-lg-4" key={category.title}>
                <div className="commerce-category-card">
                  <div className="commerce-category-icon">
                    <i className={`bi ${category.icon}`}></i>
                  </div>

                  <div>
                    <h3>{category.title}</h3>
                    <p>{category.text}</p>
                  </div>

                  <i className="bi bi-arrow-up-right category-arrow"></i>
                </div>
              </div>
            ))}
          </div>

          <div className="commerce-category-note">
            <i className="bi bi-info-circle"></i>
            <span>
              Exemples de catégories issues de notre veille
              d'approvisionnement internationale. Chaque demande est étudiée
              individuellement.
            </span>
          </div>

        </div>
      </section>


      {/* =====================================================
          PROCESS
      ====================================================== */}
      <section
        className="commerce-process skd-commerce-section"
        id="fonctionnement"
      >
        <div className="container">

          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <span className="commerce-section-label">
                COMMENT ÇA MARCHE ?
              </span>

              <h2 className="commerce-section-title">
                Votre commande,
                <span> étape par étape.</span>
              </h2>

              <p className="commerce-section-text">
                Nous avons conçu le parcours pour qu'il soit simple,
                transparent et compréhensible avant chaque engagement.
              </p>
            </div>
          </div>

          <div className="commerce-timeline">
            {steps.map((step, index) => (
              <div className="commerce-step" key={step.number}>

                <div className="commerce-step-number">
                  {step.number}
                </div>

                <div className="commerce-step-icon">
                  <i className={`bi ${step.icon}`}></i>
                </div>

                <div className="commerce-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>

                {index !== steps.length - 1 && (
                  <div className="commerce-step-connector"></div>
                )}

              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =====================================================
          TRANSPORT
      ====================================================== */}
      <section className="commerce-logistics skd-commerce-section">
        <div className="container">

          <div className="row align-items-center mb-5">
            <div className="col-lg-7">
              <span className="commerce-section-label">
                LOGISTIQUE CHINE → GABON
              </span>

              <h2 className="commerce-section-title mb-0">
                Choisissez le mode de
                <span> transport adapté.</span>
              </h2>
            </div>

            <div className="col-lg-5">
              <p className="commerce-section-text mb-0">
                Les tarifs et délais ci-dessous correspondent aux modalités
                actuellement communiquées par SKD et doivent être confirmés
                lors de chaque devis.
              </p>
            </div>
          </div>

          <div className="row g-4">

            {transport.map((item) => (
              <div className="col-md-6" key={item.title}>
                <div className="commerce-transport-card">

                  <div className="commerce-transport-head">
                    <div className="commerce-transport-icon">
                      <i className={`bi ${item.icon}`}></i>
                    </div>

                    <span>{item.title}</span>
                  </div>

                  <div className="commerce-transport-price">
                    {item.value}
                  </div>

                  <p>{item.description}</p>

                  <div className="commerce-transport-delay">
                    <i className="bi bi-clock"></i>
                    <span>{item.delay}</span>
                  </div>

                </div>
              </div>
            ))}

          </div>

          <div className="commerce-logistics-note mt-4">
            <i className="bi bi-exclamation-triangle"></i>
            <div>
              <strong>Important</strong>
              <p>
                Les tarifs, délais et conditions de transport peuvent varier
                selon le produit, le volume, la période, le fournisseur et les
                conditions logistiques. Ils doivent être confirmés avant toute
                commande.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          RESTRICTIONS
      ====================================================== */}
      <section className="commerce-restrictions skd-commerce-section">
        <div className="container">

          <div className="commerce-restriction-box">

            <div className="row align-items-center g-4">

              <div className="col-lg-5">
                <span className="commerce-section-label">
                  TRANSPORT AÉRIEN
                </span>

                <h2>
                  Certains produits
                  <span> nécessitent le maritime.</span>
                </h2>

                <p>
                  Pour des raisons de sécurité et selon les conditions de
                  transport communiquées par SKD, certaines marchandises ne
                  sont pas expédiées par avion.
                </p>
              </div>

              <div className="col-lg-7">
                <div className="commerce-restriction-list">

                  {restrictions.map((item) => (
                    <div className="commerce-restriction-item" key={item}>
                      <i className="bi bi-x-circle"></i>
                      <span>{item}</span>
                    </div>
                  ))}

                </div>

                <div className="commerce-restriction-footer">
                  <i className="bi bi-ship"></i>
                  <span>
                    Ces catégories peuvent être étudiées pour un transport
                    maritime selon les conditions applicables.
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          DROPSHIPPING
      ====================================================== */}
      <section className="commerce-dropshipping skd-commerce-section">
        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-6">

              <span className="commerce-section-label">
                DÉVELOPPER UN COMMERCE SANS STOCK
              </span>

              <h2 className="commerce-section-title">
                Lancez votre activité
                <span> en dropshipping.</span>
              </h2>

              <p className="commerce-section-text">
                Le dropshipping est un modèle dans lequel le commerçant vend
                un produit sans nécessairement le stocker lui-même. Lorsqu'une
                commande est passée, le fournisseur prend en charge
                l'exécution et l'expédition selon les conditions convenues.
              </p>

              <p className="commerce-section-text">
                SKD peut vous accompagner dans la recherche de produits,
                l'identification de fournisseurs et l'étude de votre projet
                d'approvisionnement.
              </p>

              <a
                href="https://wa.me/24165927486"
                target="_blank"
                rel="noopener noreferrer"
                className="commerce-btn commerce-btn-primary mt-3"
              >
                <i className="bi bi-whatsapp"></i>
                Étudier mon projet
              </a>

            </div>

            <div className="col-lg-6">

              <div className="commerce-drop-grid">

                {dropshippingBenefits.map((item) => (
                  <div className="commerce-drop-card" key={item.title}>

                    <div className="commerce-drop-icon">
                      <i className={`bi ${item.icon}`}></i>
                    </div>

                    <h3>{item.title}</h3>

                    <p>{item.text}</p>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          REMUNERATION
      ====================================================== */}
      <section className="commerce-pricing skd-commerce-section">
        <div className="container">

          <div className="row justify-content-center">
            <div className="col-lg-9">

              <div className="commerce-pricing-card">

                <div className="pricing-icon">
                  <i className="bi bi-receipt"></i>
                </div>

                <span className="commerce-section-label">
                  UNE RÉMUNÉRATION TRANSPARENTE
                </span>

                <h2>
                  Entre <strong>12 % et 15 %</strong>
                </h2>

                <p>
                  Notre rémunération pour l'intermédiation est actuellement
                  comprise entre 12 % et 15 % du montant total de l'achat,
                  selon le type de produit et la complexité de la commande.
                </p>

                <div className="pricing-features">

                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Commission présentée dans le devis</span>
                  </div>

                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Frais logistiques détaillés séparément</span>
                  </div>

                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Facture proforma avant validation</span>
                  </div>

                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Pas de frais cachés annoncés</span>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          PROFORMA
      ====================================================== */}
      <section className="commerce-proforma skd-commerce-section">
        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-5">

              <span className="commerce-section-label">
                AVANT DE COMMANDER
              </span>

              <h2 className="commerce-section-title">
                Un devis clair
                <span> avant votre engagement.</span>
              </h2>

              <p className="commerce-section-text">
                Chaque opération peut être structurée autour d'une facture
                proforma présentant les informations essentielles de votre
                commande.
              </p>

              <Link
                to="/contact"
                className="commerce-btn commerce-btn-primary mt-3"
              >
                Demander un devis
                <i className="bi bi-arrow-right"></i>
              </Link>

            </div>

            <div className="col-lg-7">

              <div className="commerce-invoice">

                <div className="invoice-top">
                  <div>
                    <small>SERVICE KING DIGITAL</small>
                    <strong>SKD</strong>
                  </div>

                  <div className="invoice-badge">
                    FACTURE PROFORMA
                  </div>
                </div>

                <div className="invoice-meta">
                  <div>
                    <span>CLIENT</span>
                    <strong>Votre entreprise</strong>
                  </div>

                  <div>
                    <span>DESTINATION</span>
                    <strong>Gabon 🇬🇦</strong>
                  </div>

                  <div>
                    <span>OBJET</span>
                    <strong>Achat via intermédiation</strong>
                  </div>
                </div>

                <div className="invoice-line">
                  <span>Produit / service</span>
                  <strong>Montant</strong>
                </div>

                <div className="invoice-item">
                  <span>Produit commandé</span>
                  <strong>—</strong>
                </div>

                <div className="invoice-item">
                  <span>Logistique</span>
                  <strong>—</strong>
                </div>

                <div className="invoice-item">
                  <span>Intermédiation SKD</span>
                  <strong>12–15 %</strong>
                </div>

                <div className="invoice-total">
                  <span>Total à payer</span>
                  <strong>À confirmer</strong>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FAQ
      ====================================================== */}
      <section className="commerce-faq skd-commerce-section">
        <div className="container">

          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">

              <span className="commerce-section-label">
                QUESTIONS FRÉQUENTES
              </span>

              <h2 className="commerce-section-title">
                Tout savoir avant
                <span> de commander.</span>
              </h2>

            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-9">

              <div className="accordion commerce-accordion" id="commerceFaq">

                {faqs.map((faq, index) => (
                  <div className="accordion-item" key={faq.question}>

                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${
                          index !== 0 ? "collapsed" : ""
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#commerceFaq${index}`}
                        aria-expanded={index === 0}
                        aria-controls={`commerceFaq${index}`}
                      >
                        {faq.question}
                      </button>
                    </h2>

                    <div
                      id={`commerceFaq${index}`}
                      className={`accordion-collapse collapse ${
                        index === 0 ? "show" : ""
                      }`}
                      data-bs-parent="#commerceFaq"
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
      ====================================================== */}
      <section className="commerce-final-cta">
        <div className="container">

          <div className="commerce-final-card">

            <div className="commerce-final-decoration"></div>

            <div className="row align-items-center position-relative">

              <div className="col-lg-8">

                <span className="commerce-section-label">
                  VOTRE PROCHAIN APPROVISIONNEMENT
                </span>

                <h2>
                  Vous avez un produit
                  <span> à importer ?</span>
                </h2>

                <p>
                  Envoyez-nous le lien, la photo ou simplement la description
                  du produit que vous recherchez. Nous étudions votre demande
                  et revenons vers vous avec les prochaines étapes.
                </p>

              </div>

              <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">

                <a
                  href="https://wa.me/24165927486"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="commerce-btn commerce-btn-white"
                >
                  <i className="bi bi-whatsapp"></i>
                  Lancer ma demande
                </a>

                <small>
                  WhatsApp · 065 92 74 86
                </small>

              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}