import { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuPress = () => {
    setOpenMenu((prev) => !prev);
  };

  const handleMobileNavigationsClick = () => {
    setOpenMenu(false);
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

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
                  href="https://play.google.com/store/apps"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download App
                </a>
              </button>
            </ul>

            <div className="mobile-menu" onClick={handleMenuPress}>
              <img src="/assets/mobile-menu.png" alt="menu" />
            </div>
          </div>
        </nav>
      </Container>

      {openMenu && (
        <div
          className={`mobile-navigations ${openMenu ? "open" : ""}`}
          onClick={handleMobileNavigationsClick}
        >
          <div
            className={`menu-container ${openMenu ? "open" : ""}`}
            onClick={stopPropagation}
          >
            <div className="close-btn" onClick={handleMenuPress}>
              <img src="/assets/close.png" alt="close" />
            </div>
            <div className="logo-container">
              <img src="/assets/doqo-logo-without-shadow.svg" alt="logo" />
            </div>
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
                  href="https://play.google.com/store/apps"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download App
                </a>
              </button>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
