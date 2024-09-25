import { Container } from "react-bootstrap";
import traveler_guide from "../../constant/travelerGuide";

const TravelerGuide = () => {
  return (
    <Container>
      <div className="traveler-guide-container">
        <div className="guide-image-container">
          <img src="/assets/mockup.png" alt="" />
        </div>
        <div className="guide-information-container">
          <h2>Traveler&apos;s Guide</h2>
          <div className="information-container">
            {traveler_guide.map((item, index) => (
              <div key={index}>
                <div className="title-container">
                  <h3>{index + 1}. </h3>
                  <h3> {item.title}</h3>
                </div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TravelerGuide;
