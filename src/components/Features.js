import React from "react";
import phoneMockup from "../assets/images/phone-app-screen.png";
import data from "../db.json";



function FeatureItem({ feature }) {
  return (
    <div
      className={`feature-item ${feature.animation === "fade-left" ? "mb-5" : "text-end mb-5"}`}
      data-aos={feature.animation}
      data-aos-delay={feature.delay}
    >
      <div
        className={`d-flex align-items-center ${
          feature.animation === "fade-left" ? "gap-4" : "   flex-row-reverse  justify-content-end gap-4"
        }`}
      >
        <div className="feature-icon flex-shrink-0">
          <i className={`${feature.icon} fs-3`}></i>
        </div>
        <div className={`feature-content ${feature.animation === "fade-left" ? "" : "text-start"}`}>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      </div>
    </div>
  );
}

const FeaturesSection = () => (
  <section id="features-2" className="features-2 section my-5">
    <div className="container" data-aos="fade-up" data-aos-delay="100">
      <div className="row align-items-center">
        {/* Left Column */}
        <div className="col-lg-4">
          {data.featureData.slice(0, 3).map((feature, index) => (
            <FeatureItem key={index} feature={feature} />
          ))}
        </div>

        {/* Center Column */}
        <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
          <div className="phone-mockup text-center">
            <img src={phoneMockup} alt="Phone Mockup" className="img-fluid" />
          </div>
        </div>

        {/* Right Column */}
        <div className="col-lg-4">
          {data.featureData.slice(3).map((feature, index) => (
            <FeatureItem key={index + 3} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
