import { Link } from "react-router-dom";


export default function About() {
  const pillars = [
    {
      icon: "bi-code-slash",
      number: "01",
      title: "Solutions numériques",
      text: "Nous concevons des sites, applications, plateformes et logiciels métiers qui répondent à des problématiques concrètes et accompagnent la transformation digitale des organisations.",
      link: "/developpement",
    },
    {
      icon: "bi-megaphone",
      number: "02",
      title: "Marketing digital",
      text: "Nous aidons les entreprises et organisations à renforcer leur visibilité, développer leur présence digitale, générer des prospects et transformer leur audience en opportunités commerciales.",
      link: "/marketing-digital",
    },
    {
      icon: "bi-globe2",
      number: "03",
      title: "Commerce international",
      text: "Nous accompagnons les entrepreneurs et entreprises dans le sourcing, l'approvisionnement international et la mise en relation avec des fournisseurs, notamment entre la Chine et le Gabon.",
      link: "/commerce-international",
    },
    {
      icon: "bi-mortarboard",
      number: "04",
      title: "Mobilité académique",
      text: "Nous accompagnons les étudiants et porteurs de projets académiques dans leur orientation, leurs candidatures, la recherche d'opportunités internationales et la préparation de leur projet d'études.",
      link: "/mobilite-academique",
    },
  ];

  const values = [
    {
      icon: "bi-lightbulb",
      title: "Innovation",
      text: "Nous cherchons constamment de meilleures façons d'utiliser la technologie, le digital et les nouveaux modèles pour créer de la valeur.",
    },
    {
      icon: "bi-bullseye",
      title: "Orientation résultats",
      text: "Nos solutions sont pensées pour produire un impact concret : gagner en efficacité, développer son activité ou concrétiser un projet.",
    },
    {
      icon: "bi-people",
      title: "Proximité",
      text: "Nous travaillons au plus près de nos clients afin de comprendre leurs réalités, leurs contraintes et leurs ambitions.",
    },
    {
      icon: "bi-globe-americas",
      title: "Ouverture internationale",
      text: "Notre ancrage au Gabon constitue un point de départ pour développer des solutions et des services à l'échelle de l'Afrique francophone et au-delà.",
    },
  ];

  /*
   * ÉQUIPE SKD
   *
   * Les chemins images sont préparés dès maintenant.
   * Il suffira de déposer les photos dans :
   *
   * public/images/team/
   *
   * puis de remplacer les fichiers si nécessaire.
   */

  const team = [
    {
      role: "Direction Générale",
      title: "Directeur Général",
      name: "À venir",
      description:
        "Définit la vision, la stratégie et les grandes orientations de Service King Digital. Il coordonne les différents pôles et veille au développement global de SKD.",
      icon: "bi-person-badge",
      image: "/images/team/dg.jpeg",
      featured: true,
    },
    {
      role: "Pôle 01",
      title: "Responsable Solutions Numériques & Développement",
      name: "À venir",
      description:
        "Pilote les activités technologiques : conception, développement, digitalisation, architecture, maintenance et évolution des solutions numériques.",
      icon: "bi-code-slash",
      image: "/images/team/responsable-technologie.jpg",
    },
    {
      role: "Pôle 02",
      title: "Responsable Marketing Digital & Développement Commercial",
      name: "À venir",
      description:
        "Pilote la stratégie marketing, la visibilité digitale, la création de contenu, l'acquisition de prospects et le développement commercial de SKD et de ses clients.",
      icon: "bi-megaphone",
      image: "/images/team/responsable-marketing.jpg",
    },
    {
      role: "Pôle 03",
      title: "Responsable Commerce International & Approvisionnement",
      name: "À venir",
      description:
        "Supervise le sourcing, la recherche de fournisseurs, les achats internationaux, la logistique et l'accompagnement des opérations d'approvisionnement.",
      icon: "bi-box-seam",
      image: "/images/team/responsable-commerce.jpg",
    },
    {
      role: "Pôle 04",
      title: "Responsable Mobilité Académique & Accompagnement Étudiant",
      name: "À venir",
      description:
        "Coordonne l'accompagnement académique : orientation, recherche de programmes, bourses, candidatures internationales et préparation des projets d'études.",
      icon: "bi-mortarboard",
      image: "/images/team/ym.png",
    },
  ];

  return (
    <div className="skd-about-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="about-hero">
        <div className="about-hero-grid"></div>

        <div className="container position-relative">
          <div className="row align-items-center g-5">

            <div className="col-lg-7">

              <span className="about-eyebrow">
                <i className="bi bi-buildings"></i>
                Service King Digital
              </span>

              <h1 className="about-hero-title">
                Une entreprise digitale construite au Gabon,
                <span> avec une ambition africaine.</span>
              </h1>

              <p className="about-hero-text">
                Service King Digital accompagne les entreprises,
                organisations, entrepreneurs, étudiants et porteurs de projets
                dans leur développement grâce à quatre expertises
                complémentaires : la technologie, le marketing digital,
                le commerce international et la mobilité académique.
              </p>

              <div className="about-hero-actions">

                <Link to="/services" className="about-btn-primary">
                  Découvrir nos services
                  <i className="bi bi-arrow-right"></i>
                </Link>

                <Link to="/contact" className="about-btn-outline">
                  Parlons de votre projet
                </Link>

              </div>

            </div>

            <div className="col-lg-5">

              <div className="about-hero-card">

                <div className="about-card-top">
                  <span className="about-status-dot"></span>
                  <span>Notre vision</span>
                </div>

                <div className="about-vision-icon">
                  <i className="bi bi-globe2"></i>
                </div>

                <h2>
                  Construire depuis le Gabon
                  <strong> pour l'Afrique.</strong>
                </h2>

                <p>
                  Développer une entreprise capable de connecter technologie,
                  croissance commerciale, opportunités internationales et
                  mobilité des talents.
                </p>

                <div className="about-card-line"></div>

                <div className="about-mini-stats">

                  <div>
                    <strong>4</strong>
                    <span>pôles d'expertise</span>
                  </div>

                  <div>
                    <strong>5</strong>
                    <span>postes clés</span>
                  </div>

                  <div>
                    <strong>1</strong>
                    <span>vision africaine</span>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          QUI SOMMES-NOUS ?
      ===================================================== */}
      <section className="about-story">

        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-6">

              <span className="about-section-kicker">
                Qui sommes-nous ?
              </span>

              <h2 className="about-section-title">
                Plus qu'un prestataire,
                <span> un partenaire de développement.</span>
              </h2>

            </div>

            <div className="col-lg-6">

              <div className="about-story-text">

                <p>
                  Service King Digital, ou SKD, est une entreprise orientée
                  vers la transformation digitale, le développement
                  commercial et l'ouverture vers les opportunités
                  internationales.
                </p>

                <p>
                  Notre approche repose sur une idée simple : les
                  entreprises, les organisations et les individus n'ont pas
                  uniquement besoin d'outils. Ils ont besoin de solutions
                  capables de résoudre leurs problèmes et de faire avancer
                  leurs projets.
                </p>

                <p>
                  C'est pourquoi nous réunissons au sein d'une même
                  structure des compétences technologiques, commerciales,
                  internationales et académiques.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          NOS 4 PÔLES
      ===================================================== */}
      <section className="about-pillars">

        <div className="container">

          <div className="about-section-heading">

            <span className="about-section-kicker">
              Nos quatre pôles
            </span>

            <h2 className="about-section-title">
              Quatre expertises.
              <span> Une seule ambition.</span>
            </h2>

            <p>
              SKD rassemble plusieurs expertises complémentaires afin
              d'accompagner un projet de manière globale, de sa conception
              jusqu'à son développement.
            </p>

          </div>

          <div className="row g-4">

            {pillars.map((pillar) => (

              <div
                className="col-md-6 col-xl-3"
                key={pillar.number}
              >

                <div className="about-pillar-card">

                  <div className="about-pillar-number">
                    {pillar.number}
                  </div>

                  <div className="about-pillar-icon">
                    <i className={`bi ${pillar.icon}`}></i>
                  </div>

                  <h3>{pillar.title}</h3>

                  <p>{pillar.text}</p>

                  <Link
                    to={pillar.link}
                    className="about-pillar-link"
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


      {/* =====================================================
          ÉQUIPE SKD
      ===================================================== */}
      <section className="about-team">

        <div className="container">

          <div className="about-section-heading">

            <span className="about-section-kicker">
              Notre équipe
            </span>

            <h2 className="about-section-title">
              Une organisation pensée pour
              <span> grandir.</span>
            </h2>

            <p>
              Derrière les quatre pôles de SKD, une organisation structurée
              autour d'une direction générale et de responsables dédiés à
              chaque domaine d'expertise.
            </p>

          </div>


          <div className="row g-4 justify-content-center">

            {team.map((member) => (

              <div
                className={
                  member.featured
                    ? "col-md-8 col-lg-5"
                    : "col-md-6 col-lg-4"
                }
                key={member.title}
              >

                <article
                  className={`about-team-card ${
                    member.featured
                      ? "about-team-card-featured"
                      : ""
                  }`}
                >

                  {/* PHOTO */}
                  <div className="about-team-photo">

                    <img
                      src={member.image}
                      alt={member.name}
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />

                    <div className="about-team-photo-placeholder">

                      <i className={`bi ${member.icon}`}></i>

                      <span>
                        Photo à venir
                      </span>

                    </div>

                    <div className="about-team-role">
                      {member.role}
                    </div>

                  </div>


                  {/* INFORMATIONS */}
                  <div className="about-team-content">

                    <span className="about-team-label">
                      {member.role}
                    </span>

                    <h3>
                      {member.title}
                    </h3>

                    <div className="about-team-name">
                      {member.name}
                    </div>

                    <p>
                      {member.description}
                    </p>

                  </div>

                </article>

              </div>

            ))}

          </div>


          {/* ORGANISATION */}
          <div className="about-team-structure">

            <div className="about-team-structure-line"></div>

            <div className="about-team-structure-content">

              <div className="about-team-structure-icon">
                <i className="bi bi-diagram-3"></i>
              </div>

              <div>

                <strong>
                  Une direction, quatre pôles, une vision commune.
                </strong>

                <span>
                  Chaque responsable pilote son domaine d'expertise tout en
                  travaillant avec les autres pôles afin de construire une
                  expérience cohérente pour nos clients et partenaires.
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          NOTRE APPROCHE
      ===================================================== */}
      <section className="about-approach">

        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-5">

              <span className="about-section-kicker">
                Notre approche
              </span>

              <h2 className="about-section-title">
                Comprendre.
                <br />
                Construire.
                <br />
                Développer.
              </h2>

              <p className="about-approach-intro">
                Nous ne commençons pas par la technologie ou par un
                catalogue de services. Nous commençons par comprendre le
                besoin.
              </p>

            </div>

            <div className="col-lg-7">

              <div className="about-approach-list">

                <div className="about-approach-item">

                  <span>01</span>

                  <div>
                    <h3>Comprendre le besoin</h3>

                    <p>
                      Identifier les objectifs, les contraintes, le marché
                      et les véritables enjeux du projet.
                    </p>
                  </div>

                </div>


                <div className="about-approach-item">

                  <span>02</span>

                  <div>
                    <h3>Concevoir la bonne solution</h3>

                    <p>
                      Définir une stratégie et une solution adaptée au
                      contexte, au budget et aux ambitions du client.
                    </p>
                  </div>

                </div>


                <div className="about-approach-item">

                  <span>03</span>

                  <div>
                    <h3>Exécuter avec exigence</h3>

                    <p>
                      Transformer la stratégie en actions, produits,
                      campagnes ou solutions concrètes.
                    </p>
                  </div>

                </div>


                <div className="about-approach-item">

                  <span>04</span>

                  <div>
                    <h3>Accompagner dans la durée</h3>

                    <p>
                      Mesurer, améliorer, maintenir et faire évoluer les
                      solutions en fonction des besoins.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          VALEURS
      ===================================================== */}
      <section className="about-values">

        <div className="container">

          <div className="about-section-heading">

            <span className="about-section-kicker">
              Ce qui nous guide
            </span>

            <h2 className="about-section-title">
              Nos valeurs
            </h2>

            <p>
              Les principes qui structurent notre manière de travailler et
              notre vision de SKD.
            </p>

          </div>

          <div className="row g-4">

            {values.map((value) => (

              <div
                className="col-md-6 col-lg-3"
                key={value.title}
              >

                <div className="about-value-card">

                  <div className="about-value-icon">
                    <i className={`bi ${value.icon}`}></i>
                  </div>

                  <h3>{value.title}</h3>

                  <p>{value.text}</p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          POSITIONNEMENT / AMBITION
      ===================================================== */}
      <section className="about-positioning">

        <div className="container">

          <div className="about-positioning-box">

            <div className="row align-items-center g-5">

              <div className="col-lg-7">

                <span className="about-section-kicker">
                  Notre ambition
                </span>

                <h2>
                  Faire émerger une nouvelle génération
                  <span> d'entreprise digitale africaine.</span>
                </h2>

                <p>
                  Notre ambition est de faire de SKD une référence
                  technologique et digitale au Gabon, puis de construire
                  progressivement une présence forte en Afrique francophone.
                </p>

                <p>
                  Nous voulons montrer qu'il est possible de concevoir,
                  développer et commercialiser depuis l'Afrique des solutions
                  compétitives capables de répondre aux besoins des marchés
                  africains et internationaux.
                </p>

              </div>

              <div className="col-lg-5">

                <div className="about-positioning-visual">

                  <div className="about-orbit orbit-one"></div>
                  <div className="about-orbit orbit-two"></div>

                  <div className="about-orbit-center">

                    <span>SKD</span>
                    <small>Gabon</small>

                  </div>

                  <div className="about-orbit-node node-one">
                    <i className="bi bi-cpu"></i>
                  </div>

                  <div className="about-orbit-node node-two">
                    <i className="bi bi-megaphone"></i>
                  </div>

                  <div className="about-orbit-node node-three">
                    <i className="bi bi-globe2"></i>
                  </div>

                  <div className="about-orbit-node node-four">
                    <i className="bi bi-mortarboard"></i>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ÉCOSYSTÈME
      ===================================================== */}
      <section className="about-ecosystem">

        <div className="container">

          <div className="about-section-heading">

            <span className="about-section-kicker">
              Notre écosystème
            </span>

            <h2 className="about-section-title">
              Connecter les opportunités.
            </h2>

            <p>
              Nos quatre pôles peuvent fonctionner séparément, mais leur
              véritable force apparaît lorsqu'ils se complètent.
            </p>

          </div>


          <div className="about-ecosystem-flow">

            <div className="about-eco-node">
              <i className="bi bi-code-slash"></i>
              <span>Technologie</span>
            </div>

            <div className="about-eco-line"></div>

            <div className="about-eco-node">
              <i className="bi bi-megaphone"></i>
              <span>Marketing</span>
            </div>

            <div className="about-eco-line"></div>

            <div className="about-eco-node">
              <i className="bi bi-globe2"></i>
              <span>Commerce</span>
            </div>

            <div className="about-eco-line"></div>

            <div className="about-eco-node">
              <i className="bi bi-mortarboard"></i>
              <span>Mobilité</span>
            </div>

          </div>


          <div className="about-ecosystem-result">

            <i className="bi bi-arrow-down"></i>

            <strong>
              Un écosystème orienté croissance
            </strong>

            <span>
              Digitaliser · Développer · Connecter · Ouvrir
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="about-final-cta">

        <div className="container">

          <div className="about-final-box">

            <span className="about-section-kicker">
              Construisons ensemble
            </span>

            <h2>
              Un projet, une ambition,
              <span> une prochaine étape.</span>
            </h2>

            <p>
              Que vous souhaitiez digitaliser votre activité, développer
              votre visibilité, importer un produit ou préparer un projet
              académique international, notre équipe est là pour vous
              accompagner.
            </p>

            <div className="about-final-actions">

              <Link
                to="/contact"
                className="about-btn-primary"
              >
                Parlons de votre projet
                <i className="bi bi-arrow-right"></i>
              </Link>

              <Link
                to="/services"
                className="about-btn-outline"
              >
                Voir nos services
              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

