export default function ServiceCard({
  number,
  icon,
  title,
  description,
  image,
  services = [],
  link,
}) {
  return (
    <article className="skd-service-card">

      <div className="skd-service-card-image">
        <img
          src={image}
          alt={title}
          loading="lazy"
        />

        <div className="skd-service-card-number">
          {number}
        </div>

        <div className="skd-service-card-icon">
          <i className={`bi ${icon}`}></i>
        </div>
      </div>

      <div className="skd-service-card-body">

        <span className="skd-service-card-label">
          DOMAINE {number}
        </span>

        <h3>{title}</h3>

        <p>{description}</p>

        <div className="skd-service-list">
          {services.map((service, index) => (
            <div
              className="skd-service-list-item"
              key={index}
            >
              <i className="bi bi-check2"></i>
              <span>{service}</span>
            </div>
          ))}
        </div>

        {link && (
          <a
            href={link}
            className="skd-service-card-link"
          >
            Découvrir ce service
            <i className="bi bi-arrow-right"></i>
          </a>
        )}

      </div>
    </article>
  );
}