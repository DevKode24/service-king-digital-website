import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    { label: "Accueil", path: "/" },
    { label: "À propos", path: "/a-propos" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar navbar-expand-lg skd-navbar sticky-top">
      <div className="container py-2">
       <NavLink to="/" className="navbar-brand">
  <img
    src="/logo/skd-logo.png"
    alt="Service King Digital - SKD"
    className="skd-logo"          
  /> 
</NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#skdNavbar"
          aria-controls="skdNavbar"
          aria-expanded="false"
          aria-label="Ouvrir le menu"
        >
          <i className="bi bi-list fs-3"></i>
        </button>

        <div className="collapse navbar-collapse" id="skdNavbar">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {navItems.map((item) => (
              <li className="nav-item" key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

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
    </nav>
  );
}