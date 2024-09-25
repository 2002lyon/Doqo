import { Container } from "react-bootstrap";

const Hero = () => {
  return (
    <Container>
      <div className="hero-section">
        <div className="blob">
          <img src="/assets/blob.svg" alt="" />
        </div>
        <div className="hero-left">
          <div className="hero-text">
            <h2 className="hero-title">
              <p style={{ color: "white", margin: 0, padding: 0 }}>Nepal</p>
              Airacha Koi ?
            </h2>
            <p className="hero-desc">
              Unlock the World: Everyday Travelers, Your Trusted Heroes for
              Delivering Orders!
              {/* Connecting Shoppers and Travelers */}
            </p>
          </div>

          <div className="hero-btns">
            <div className="google-store-download">
              <a
                href="https://play.google.com/store/apps"
                target="_blank"
                rel="noopener noreferrer"
                className="google-store-download"
              >
                <img
                  src="/assets/google_play-dark.svg"
                  alt="download from play store"
                />
              </a>
            </div>
            <div className="apple-store-download">
              <a
                href="https://play.google.com/store/apps"
                target="_blank"
                rel="noopener noreferrer"
                className="google-store-download"
              >
                <img
                  src="/assets/apple_store-dark.svg"
                  alt="download from apple store"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image-container">
            <div className="hero-image">
              <div className="hero-image">
                <img src="/assets/doqo-hero.svg" alt="hero-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
