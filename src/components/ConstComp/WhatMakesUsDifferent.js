import React from "react";
import whatMakesUsDifferent from "../../assets/images/construction/whatMakesUsDifferent.jpg";

const WhatMakesUsDifferent = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {/* Left Content */}
        <div className="col-md-7">
          <h2 className="fw-bold">
            <span className="text-primary">What Make</span>{" "}
            <span className="text-dark">Us Different?</span>
          </h2>

          {/* Features List */}
          <ul className="list-unstyled mt-4">
            <li className="d-flex align-items-start mb-3">
              <span className="me-2">✔️</span>
              <p className="m-0">
                <strong>Certified and Experienced Team:</strong> Our electricians are fully licensed and highly experienced in handling various electrical projects.
              </p>
            </li>
            <li className="d-flex align-items-start mb-3">
              <span className="me-2">✔️</span>
              <p className="m-0">
                <strong>Quality Assurance:</strong> We use top-quality materials and adhere to industry standards to ensure safety and durability.
              </p>
            </li>
            <li className="d-flex align-items-start mb-3">
              <span className="me-2">✔️</span>
              <p className="m-0">
                <strong>Customer-Centric Approach:</strong> We prioritize our clients’ needs and offer customized solutions to meet their unique requirements.
              </p>
            </li>
            <li className="d-flex justify-content-between align-items-start">
              <span className="me-2">✔️</span>
              <p className="m-0">
                <strong>Competitive Pricing:</strong> We deliver excellent value by offering competitive rates without compromising on quality.
              </p>
            </li>
          </ul>
        </div>

        {/* Right Image Section */}
        <div className="col-md-5 position-relative">
          <div className=" position-absolute  bottom-50 end-50 w-100 h-100 rounded-4"></div>
          <img
            src={whatMakesUsDifferent}
            alt="Team celebrating"
            className="img-fluid position-relative rounded-4"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatMakesUsDifferent;
