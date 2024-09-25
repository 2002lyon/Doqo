import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-container shadow-sm">
      <Container>
        <nav className="navbar">
          <div className="logo">
            <img src="/assets/doqo-logo-without-shadow.svg" alt="logo" />
          </div>
          <div className="navigations">
            <ul className="links-container">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>

              <button className="primary-cta-btn">
                <a
                  href="https://play.google.com/store/apps" // Replace with your Play Store link
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download App
                </a>
              </button>
            </ul>

            <div className="mobile-menu">
              <img src="/assets/mobile-menu.png" alt="menu" />
            </div>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
