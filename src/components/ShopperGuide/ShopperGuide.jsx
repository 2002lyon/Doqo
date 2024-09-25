import { Container } from "react-bootstrap";
import shopper_guide from "../../constant/shopperGuide";

const ShopperGuide = () => {
  return (
    <Container>
      <div className="shopper-guide-container">
        <div className="guide-image-container">
          <img src="/assets/mockup.png" alt="" />
        </div>
        <div className="guide-information-container">
          <h2>Shopper&apos;s Guide</h2>
          <div className="information-container">
            {shopper_guide.map((item, index) => (
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

export default ShopperGuide;
