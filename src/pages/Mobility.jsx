import { Link } from "react-router-dom";

const destinations = [
  {
    region: "Afrique",
    country: "Maroc",
    flag: "🇲🇦",
    icon: "bi-building",
    description:
      "Universités, écoles et opportunités de financement pour poursuivre vos études au Maroc.",
  },
  {
    region: "Afrique",
    country: "Sénégal",
    flag: "🇸🇳",
    icon: "bi-mortarboard",
    description:
      "Explorez les possibilités d'études supérieures et de bourses au Sénégal.",
  },
  {
    region: "Afrique",
    country: "Afrique du Sud",
    flag: "🇿🇦",
    icon: "bi-globe2",
    description:
      "Accédez aux opportunités académiques et programmes internationaux disponibles.",
  },
  {
    region: "Afrique",
    country: "Rwanda",
    flag: "🇷🇼",
    icon: "bi-stars",
    description:
      "Découvrez les formations et opportunités de mobilité dans un environnement universitaire dynamique.",
  },
  {
    region: "Europe",
    country: "France",
    flag: "🇫🇷",
    icon: "bi-bank",
    description:
      "Accompagnement pour les admissions, bourses et projets d'études en France.",
  },
  {
    region: "Europe",
    country: "Belgique",
    flag: "🇧🇪",
    icon: "bi-mortarboard-fill",
    description:
      "Identifiez les établissements, programmes et opportunités correspondant à votre profil.",
  },
  {
    region: "Europe",
    country: "Luxembourg",
    flag: "🇱🇺",
    icon: "bi-buildings",
    description:
      "Explorez les possibilités d'études et de mobilité dans un environnement international.",
  },
  {
    region: "Asie",
    country: "Chine",
    flag: "🇨🇳",
    icon: "bi-globe-asia-australia",
    description:
      "Recherche d'universités, programmes et opportunités de financement en Chine.",
  },
  {
    region: "Amérique",
    country: "Canada",
    flag: "🇨🇦",
    icon: "bi-globe-americas",
    description:
      "Orientation vers les établissements, programmes et possibilités de bourses au Canada.",
  },
];

const scholarshipTypes = [
  {
    icon: "bi-bank2",
    title: "Bourses gouvernementales",
    text: "Identifiez les programmes proposés par les gouvernements et organismes publics.",
  },
  {
    icon: "bi-mortarboard-fill",
    title: "Bourses universitaires",
    text: "Recherchez les possibilités de financement directement proposées par les établissements.",
  },
  {
    icon: "bi-trophy-fill",
    title: "Bourses d'excellence",
    text: "Repérez les programmes destinés aux profils académiques particulièrement compétitifs.",
  },
  {
    icon: "bi-cash-coin",
    title: "Financements complets",
    text: "Recherchez les opportunités pouvant couvrir tout ou partie des frais liés aux études.",
  },
  {
    icon: "bi-percent",
    title: "Réductions & exonérations",
    text: "Identifiez les dispositifs pouvant réduire les frais de scolarité ou certains coûts.",
  },
  {
    icon: "bi-lightbulb-fill",
    title: "Opportunités de recherche",
    text: "Explorez les possibilités de master recherche, doctorat et projets académiques.",
  },
];

const steps = [
  {
    number: "01",
    icon: "bi-person-lines-fill",
    title: "Évaluation du profil",
    text: "Nous analysons votre parcours académique, votre niveau d'études, vos objectifs et vos contraintes.",
  },
  {
    number: "02",
    icon: "bi-search",
    title: "Recherche d'opportunités",
    text: "Nous identifions les formations, établissements et opportunités de financement correspondant à votre profil.",
  },
  {
    number: "03",
    icon: "bi-compass",
    title: "Orientation",
    text: "Nous vous aidons à comparer les destinations et à choisir les options les plus cohérentes avec votre projet.",
  },
  {
    number: "04",
    icon: "bi-file-earmark-text",
    title: "Préparation du dossier",
    text: "Nous vous accompagnons dans la préparation et l'organisation des pièces nécessaires à votre candidature.",
  },
  {
    number: "05",
    icon: "bi-send-check",
    title: "Candidatures & suivi",
    text: "Nous vous accompagnons dans vos démarches et vous aidons à suivre l'évolution de vos candidatures.",
  },
  {
    number: "06",
    icon: "bi-airplane",
    title: "Préparation au départ",
    text: "Une fois votre projet concrétisé, nous vous aidons à préparer les prochaines étapes de votre mobilité.",
  },
];

const profiles = [
  {
    icon: "bi-book",
    title: "Lycéens",
    text: "Construire un projet d'études après le bac.",
  },
  {
    icon: "bi-mortarboard",
    title: "Étudiants en Licence",
    text: "Préparer une poursuite d'études ou une mobilité.",
  },
  {
    icon: "bi-award",
    title: "Étudiants en Master",
    text: "Identifier des formations et financements adaptés.",
  },
  {
    icon: "bi-journal-richtext",
    title: "Doctorants",
    text: "Rechercher des opportunités de recherche et de financement.",
  },
  {
    icon: "bi-briefcase",
    title: "Professionnels",
    text: "Reprendre des études ou développer une spécialisation internationale.",
  },
];

const faqs = [
  {
    question: "SKD garantit-il l'obtention d'une bourse ?",
    answer:
      "Non. L'obtention d'une bourse ou d'une admission dépend de l'établissement, du programme et de la compétitivité du dossier. SKD vous accompagne dans la recherche et la préparation de candidatures adaptées à votre profil.",
  },
  {
    question: "Quels pays sont concernés ?",
    answer:
      "SKD accompagne notamment les projets vers le Maroc, le Sénégal, l'Afrique du Sud, le Rwanda, la France, la Belgique, le Luxembourg, la Chine et le Canada.",
  },
  {
    question: "Est-ce réservé aux étudiants ayant d'excellentes notes ?",
    answer:
      "Non. Chaque opportunité possède ses propres critères. Nous analysons le profil global du candidat afin d'identifier les possibilités qui peuvent être pertinentes.",
  },
  {
    question: "Pouvez-vous m'aider à constituer mon dossier ?",
    answer:
      "Oui. L'accompagnement peut couvrir l'orientation, la recherche d'opportunités, l'organisation des pièces, la préparation de candidature et le suivi selon la formule choisie.",
  },
];

export default function Mobility() {
  return (
    <div className="skd-mobility-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="skd-mobility-hero">
        <div className="mobility-hero-grid"></div>

        <div className="mobility-orb mobility-orb-one"></div>
        <div className="mobility-orb mobility-orb-two"></div>

        <div className="container position-relative">
          <div className="row align-items-center min-vh-75">

            <div className="col-lg-7">
              <div className="mobility-hero-content">

                <div className="mobility-eyebrow">
                  <span></span>
                  MOBILITÉ ESTUDIANTINE INTERNATIONALE
                </div>

                <h1>
                  Étudiez là où
                  <span> vos ambitions vous portent.</span>
                </h1>

                <p>
                  SKD accompagne les étudiants dans leurs projets d'études,
                  de bourses et de mobilité internationale en Afrique, en
                  Europe, en Asie et en Amérique.
                </p>

                <div className="mobility-hero-actions">
                  <Link
                    to="/contact"
                    className="mobility-btn-primary"
                  >
                    Évaluer mon profil
                    <i className="bi bi-arrow-right"></i>
                  </Link>

                  <a
                    href="https://wa.me/24105927486"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobility-btn-outline"
                  >
                    <i className="bi bi-whatsapp"></i>
                    Parler à un conseiller
                  </a>
                </div>

                <div className="mobility-hero-trust">
                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    Orientation personnalisée
                  </div>

                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    Opportunités internationales
                  </div>

                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    Accompagnement de A à Z
                  </div>
                </div>

              </div>
            </div>

            <div className="col-lg-5">
              <div className="mobility-hero-visual">

                <div className="mobility-globe">
                  <i className="bi bi-globe2"></i>
                </div>

                <div className="mobility-floating-card card-one">
                  <span>Afrique</span>
                  <strong>4 destinations</strong>
                </div>

                <div className="mobility-floating-card card-two">
                  <span>Europe</span>
                  <strong>3 destinations</strong>
                </div>

                <div className="mobility-floating-card card-three">
                  <span>Amérique</span>
                  <strong>Canada</strong>
                </div>

                <div className="mobility-floating-card card-four">
                  <span>Asie</span>
                  <strong>Chine</strong>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          DESTINATION STRIP
      ===================================================== */}
      <section className="mobility-destination-strip">
        <div className="container">
          <div className="row g-0">

            <div className="col-6 col-lg-3">
              <div className="destination-region">
                <i className="bi bi-globe-africa-africa"></i>
                <div>
                  <span>Afrique</span>
                  <strong>Maroc · Sénégal · Afrique du Sud · Rwanda</strong>
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="destination-region">
                <i className="bi bi-globe-europe-africa"></i>
                <div>
                  <span>Europe</span>
                  <strong>France · Belgique · Luxembourg</strong>
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="destination-region">
                <i className="bi bi-globe-asia-australia"></i>
                <div>
                  <span>Asie</span>
                  <strong>Chine</strong>
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="destination-region">
                <i className="bi bi-globe-americas"></i>
                <div>
                  <span>Amérique</span>
                  <strong>Canada</strong>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="skd-mobility-intro skd-section">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-6">
              <div className="mobility-intro-visual">
                <div className="intro-image">
                  <img
                    src="/images/mobility/chi.png"
                    alt="Étudiants en mobilité internationale"
                  />
                </div>

                <div className="intro-stat">
                  <strong>4</strong>
                  <span>régions du monde</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mobility-section-heading text-start">

                <span className="mobility-section-label">
                  NOTRE ACCOMPAGNEMENT
                </span>

                <h2>
                  Votre projet d'études mérite
                  <span> une vraie stratégie.</span>
                </h2>

                <p>
                  Partir étudier à l'étranger ne consiste pas simplement
                  à choisir une université. Il faut comprendre les
                  opportunités, sélectionner les programmes adaptés,
                  préparer un dossier solide et anticiper les différentes
                  étapes du projet.
                </p>

                <p>
                  SKD vous accompagne dans cette démarche afin de vous
                  aider à transformer votre ambition académique en un
                  projet structuré et réaliste.
                </p>

                <div className="mobility-intro-points">

                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Analyse de votre profil</span>
                  </div>

                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Recherche d'opportunités</span>
                  </div>

                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Orientation personnalisée</span>
                  </div>

                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Accompagnement dans les démarches</span>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          DESTINATIONS
      ===================================================== */}
      <section className="mobility-destinations skd-section">
        <div className="container">

          <div className="mobility-section-heading text-center">
            <span className="mobility-section-label">
              DESTINATIONS
            </span>

            <h2>
              Un monde de possibilités
              <span> académiques.</span>
            </h2>

            <p>
              Explorez les principales destinations vers lesquelles SKD
              peut vous orienter selon votre profil et votre projet.
            </p>
          </div>

          <div className="row g-4 mt-3">

            {destinations.map((destination, index) => (
              <div
                className="col-lg-4 col-md-6"
                key={destination.country}
              >
                <article
                  className="mobility-destination-card"
                  style={{
                    animationDelay: `${index * 0.08}s`,
                  }}
                >
                  <div className="destination-card-top">
                    <span className="destination-flag">
                      {destination.flag}
                    </span>

                    <span className="destination-region-tag">
                      {destination.region}
                    </span>
                  </div>

                  <div className="destination-icon">
                    <i className={`bi ${destination.icon}`}></i>
                  </div>

                  <h3>{destination.country}</h3>

                  <p>{destination.description}</p>

                  <Link to="/contact">
                    Étudier dans cette destination
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </article>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          SCHOLARSHIPS
      ===================================================== */}
      <section className="mobility-scholarships skd-section">
        <div className="container">

          <div className="row align-items-end mb-5">

            <div className="col-lg-7">
              <div className="mobility-section-heading text-start">

                <span className="mobility-section-label">
                  BOURSES & FINANCEMENTS
                </span>

                <h2>
                  Trouver une opportunité,
                  <span> c'est aussi savoir où chercher.</span>
                </h2>

              </div>
            </div>

            <div className="col-lg-5">
              <p className="mobility-section-side-text">
                Les opportunités de financement varient selon le pays,
                le niveau d'études, la discipline et le profil du candidat.
                SKD vous aide à identifier les pistes pertinentes.
              </p>
            </div>

          </div>

          <div className="row g-4">

            {scholarshipTypes.map((item, index) => (
              <div
                className="col-lg-4 col-md-6"
                key={item.title}
              >
                <article className="mobility-scholarship-card">

                  <div className="scholarship-number">
                    0{index + 1}
                  </div>

                  <div className="scholarship-icon">
                    <i className={`bi ${item.icon}`}></i>
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                </article>
              </div>
            ))}

          </div>

          <div className="mobility-scholarship-note">
            <i className="bi bi-info-circle-fill"></i>

            <p>
              <strong>À retenir :</strong> SKD ne garantit pas l'obtention
              d'une bourse ou d'une admission. Notre rôle est de vous
              aider à identifier les opportunités pertinentes et à préparer
              une candidature cohérente avec les critères de chaque programme.
            </p>
          </div>

        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}
      <section className="mobility-process skd-section">
        <div className="container">

          <div className="mobility-section-heading text-center">
            <span className="mobility-section-label">
              NOTRE MÉTHODE
            </span>

            <h2>
              De votre projet
              <span> au départ.</span>
            </h2>

            <p>
              Un accompagnement structuré pour avancer étape par étape.
            </p>
          </div>

          <div className="mobility-timeline">

            {steps.map((step, index) => (
              <div
                className="mobility-process-step"
                key={step.number}
              >
                <div className="process-step-number">
                  {step.number}
                </div>

                <div className="process-step-icon">
                  <i className={`bi ${step.icon}`}></i>
                </div>

                <div className="process-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>

                {index !== steps.length - 1 && (
                  <div className="process-step-line"></div>
                )}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          PROFILES
      ===================================================== */}
      <section className="mobility-profiles skd-section">
        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-5">
              <div className="mobility-section-heading text-start">

                <span className="mobility-section-label">
                  POUR QUI ?
                </span>

                <h2>
                  Votre parcours est
                  <span> unique.</span>
                </h2>

                <p>
                  Que vous soyez encore au lycée, étudiant ou professionnel,
                  votre stratégie de mobilité doit être construite autour
                  de votre parcours et de vos objectifs.
                </p>

                <Link
                  to="/contact"
                  className="mobility-inline-btn"
                >
                  Parler de mon projet
                  <i className="bi bi-arrow-right"></i>
                </Link>

              </div>
            </div>

            <div className="col-lg-7">

              <div className="row g-3">

                {profiles.map((profile) => (
                  <div
                    className="col-md-6"
                    key={profile.title}
                  >
                    <div className="mobility-profile-card">

                      <div className="profile-card-icon">
                        <i className={`bi ${profile.icon}`}></i>
                      </div>

                      <div>
                        <h3>{profile.title}</h3>
                        <p>{profile.text}</p>
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
          WHY SKD
      ===================================================== */}
      <section className="mobility-why skd-section">
        <div className="container">

          <div className="mobility-section-heading text-center">
            <span className="mobility-section-label">
              POURQUOI SKD ?
            </span>

            <h2>
              Plus qu'une orientation,
              <span> un accompagnement.</span>
            </h2>
          </div>

          <div className="row g-4 mt-3">

            <div className="col-lg-3 col-md-6">
              <div className="mobility-why-card">
                <span>01</span>
                <i className="bi bi-person-check-fill"></i>
                <h3>Approche personnalisée</h3>
                <p>
                  Votre parcours, votre niveau et vos objectifs sont au
                  centre de notre analyse.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="mobility-why-card">
                <span>02</span>
                <i className="bi bi-globe2"></i>
                <h3>Vision internationale</h3>
                <p>
                  Une ouverture vers plusieurs destinations en Afrique,
                  Europe, Asie et Amérique.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="mobility-why-card">
                <span>03</span>
                <i className="bi bi-search-heart"></i>
                <h3>Recherche ciblée</h3>
                <p>
                  Nous cherchons des opportunités cohérentes avec votre
                  profil plutôt qu'une simple liste générique.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="mobility-why-card">
                <span>04</span>
                <i className="bi bi-headset"></i>
                <h3>Accompagnement humain</h3>
                <p>
                  Vous pouvez être accompagné à chaque étape de votre
                  projet selon vos besoins.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}
      <section className="mobility-faq skd-section">
        <div className="container">

          <div className="mobility-section-heading text-center">
            <span className="mobility-section-label">
              QUESTIONS FRÉQUENTES
            </span>

            <h2>
              Les réponses avant
              <span> de commencer.</span>
            </h2>
          </div>

          <div className="accordion mobility-accordion" id="mobilityFaq">

            {faqs.map((faq, index) => (
              <div
                className="accordion-item"
                key={faq.question}
              >
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${
                      index !== 0 ? "collapsed" : ""
                    }`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#faq-${index}`}
                    aria-expanded={index === 0}
                  >
                    {faq.question}
                  </button>
                </h2>

                <div
                  id={`faq-${index}`}
                  className={`accordion-collapse collapse ${
                    index === 0 ? "show" : ""
                  }`}
                  data-bs-parent="#mobilityFaq"
                >
                  <div className="accordion-body">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="mobility-final-cta">
        <div className="mobility-final-shape shape-one"></div>
        <div className="mobility-final-shape shape-two"></div>

        <div className="container position-relative">

          <div className="mobility-final-inner">

            <div className="mobility-final-icon">
              <i className="bi bi-airplane-engines-fill"></i>
            </div>

            <span>
              VOTRE PROJET COMMENCE ICI
            </span>

            <h2>
              Et si votre prochaine
              <br />
              destination était
              <strong> votre avenir ?</strong>
            </h2>

            <p>
              Parlez-nous de votre parcours et de vos ambitions.
              Nous étudierons ensemble les possibilités qui peuvent
              correspondre à votre projet.
            </p>

            <div className="mobility-final-actions">

              <Link
                to="/contact"
                className="mobility-final-btn"
              >
                Évaluer mon profil
                <i className="bi bi-arrow-right"></i>
              </Link>

              <a
                href="https://wa.me/24105927486"
                target="_blank"
                rel="noopener noreferrer"
                className="mobility-final-whatsapp"
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