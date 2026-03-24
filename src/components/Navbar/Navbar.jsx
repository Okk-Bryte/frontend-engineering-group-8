import "./Navbar.css";
import logo from "../../media/logo.png";

function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <a
        href="#"
        className="navbar-logo"
        aria-label="Planet Creative World Home"
      >
        <img className="logo-img" src={logo} alt="planet logo" />
      </a>
    </nav>
  );
}

export default Navbar;
