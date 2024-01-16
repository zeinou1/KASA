import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo Kasa" className="navbar_logo" />
      <ul className="navbar_navigation">
        <NavLink to="/" className={(nav) => (nav.isActive ? "navbar_active" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/AproposIndex" className={(nav) => (nav.isActive ? "navbar_active" : "")}
        >
          <li>A Propos</li>
        </NavLink>
      </ul>
    </nav>
  );
};
export default Navigation;
