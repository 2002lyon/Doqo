import { Container } from "react-bootstrap";
import { features } from "../../constant/features";

const Features = () => {
  return (
    <Container>
      <div className="feature-container">
        <h2 className="feature-title">Our Features</h2>
        <div className="features">
          {features.map((feat, index) => (
            <div key={index} className="feature-box">
              <div className="feature-image-container">
                <img src={feat.imageUrl} alt={feat.featureName} />
              </div>
              <div className="feature-information-container">
                <h3>{feat.featureName}</h3>
                <p>{feat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Features;
