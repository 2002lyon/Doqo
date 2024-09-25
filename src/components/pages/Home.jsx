import { useEffect, useRef, useState } from "react";
import Features from "../Features/Features";
import Hero from "../Hero/Hero";
import ShopperGuide from "../ShopperGuide/ShopperGuide";
import TravelerGuide from "../TravelerGuide/TravelerGuide";

const Homepage = () => {
  const [isShopperGuideVisible, setIsShopperGuideVisible] = useState(false);
  const [isTravelerGuideVisible, setIsTravelerGuideVisible] = useState(false);

  const shopperGuideRef = useRef(null);
  const travelerGuideRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (entry.target === shopperGuideRef.current) {
            setIsShopperGuideVisible(true); // Set visible when it first enters
          }
          if (entry.target === travelerGuideRef.current) {
            setIsTravelerGuideVisible(true); // Set visible when it first enters
          }
        }
      },
      {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.4, // trigger when 10% is visible
      }
    );

    if (shopperGuideRef.current) {
      observer.observe(shopperGuideRef.current);
    }
    if (travelerGuideRef.current) {
      observer.observe(travelerGuideRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (shopperGuideRef.current) observer.unobserve(shopperGuideRef.current);
      if (travelerGuideRef.current)
        observer.unobserve(travelerGuideRef.current);
    };
  }, []);

  return (
    <>
      <Hero />
      <Features />

      <div className="light-background">
        <div
          ref={shopperGuideRef}
          style={{
            opacity: isShopperGuideVisible ? 1 : 0.5,
            transition: "opacity 0.5s ease",
          }}
        >
          <ShopperGuide />
        </div>

        <div
          ref={travelerGuideRef}
          style={{
            opacity: isTravelerGuideVisible ? 1 : 0.5,
            transition: "opacity 0.5s ease",
          }}
        >
          <TravelerGuide />
        </div>
      </div>
    </>
  );
};

export default Homepage;
