import React from "react";

const CallToAction = () => {
  return (
    <section
      id="call-to-action"
      className="parallax bg-primary position-relative call-to-action section"
    >
      <div className="image-overlay"></div>
      <div
        className="container w-100 position-absolute top-50 start-50 translate-middle"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="row content justify-content-center text-white align-items-center position-relative">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-4 mb-4">
              Elevate Your Business with Cutting-Edge IT Solutions
            </h2>
            <p className="mb-4">
              Harness the power of innovation and technology to optimize your operations, enhance your productivity, and achieve your goals.
            </p>
            <a href="#" className="btn btn-light rounded-pill btn-cta">
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
