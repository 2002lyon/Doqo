import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const links = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "How does it Work?", url: "/" },
    { name: "Support", url: "/support" },
  ];
  return (
    <div className="footer">
      <Container>
        <div className="footer-information-container">
          <div className="info">
            <div className="logo-container">
              <img src="/assets/doqo-logo-without-shadow.svg" alt="" />
            </div>
            <p>Download now</p>
          </div>

          <div className="download-container">
            <div className="download">
              <a
                href="https://play.google.com/store/apps"
                target="_blank"
                rel="noopener noreferrer"
                className="google-store-download"
              >
                <img
                  src="/assets/google_play-light.svg"
                  alt="download on play store"
                />
              </a>
            </div>
            <div className="download">
              <a
                href="https://play.google.com/store/apps"
                target="_blank"
                rel="noopener noreferrer"
                className="google-store-download"
              >
                <img src="/assets/apple_store-light.svg" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-links-container">
          <h3>Quick Links</h3>
          <div className="links">
            {links.map((link, index) => (
              <li key={index}>
                <Link to={link.url}>{link.name}</Link>
              </li>
            ))}
          </div>

          <div className="footer-socials-container">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="google-store-download"
            >
              <RiFacebookCircleFill className="icon" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="google-store-download"
            >
              <FaInstagram className="icon" />
            </a>
          </div>
        </div>
      </Container>
      <div className="copyright-container">
        <p>Doqo 2024 | All Rights Reserved | Developed by: Arbyte Solutions</p>
      </div>
    </div>
  );
};

export default Footer;
