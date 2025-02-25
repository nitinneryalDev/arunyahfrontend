import React from "react";
import CommonHero from "./CommonHero";
import constructionImage from "../assets/images/construction/constructions.jpg";
import visionImage from "../assets/images/construction/constructonn.jpg";
import image from "../assets/images/construction/company_vision.jpg";
import CompletedProjects from "./ConstComp/CompletedProjects";
import KeyStrength from "./KeyStrength";
import MEPservices from "./ConstComp/MEPservices";
import SafetyPolicies from "./ConstComp/SafetyPolicies";
import BuildingsProjects from "./ConstComp/BuildingProjects";
import CompanyAchivements from "./ConstComp/CompanyAchivements";
import SalesBook from "./ConstComp/SalesBook";
import WhatMakesUsDifferent from "./ConstComp/WhatMakesUsDifferent";
import ContactSection from "./ConstComp/ContactSection";
function Construction() {
  const cardData = [
    {
      title: "Technical Expertise",
      text: "Our technical know-how, combined with a talented workforce, ensures that we provide innovative and efficient solutions tailored to each project's unique requirements",
      date: "2 days ago",
    },
    {
      title: "Design Excellence",
      text: "We possess exceptional design expertise, enabling us to create customized MEP systems that meet the highest standards of performance and reliability.",
      date: "2 days ago",
    },
    {
      title: "Regional Expertise",
      text: "Our deep understanding of Himachal Pradesh’s unique environment,regulatory landscape, and construction challenges sets us apart.",
      date: "2 days ago",
    },
    {
      title: "Cost-Effective Solutions",
      text: "We provide cost-effective solutions without compromising on quality through optimized, value-driven designs that maximize client investment without compromising quality.",
      date: "2 days ago",
    },
  ];

  return (
    <>
      <CommonHero
        title="Construction"
        description="Your Trusted MEP Partner in Himachal Pradesh."
        clsnm="services_container"
      />
      <section id="about" className="py-md-5 py-3 my-2 my-md-5">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 align-items-center">
            {/* Left Column */}
            <div className="col-xl-5" data-aos="fade-up" data-aos-delay="200">
              <span className="text-primary fw-bold">
                About Arunyah Constuructions
              </span>
              <h2 className="mt-3">Constructions</h2>
              <p className="text-muted my-4">
                Arunyah Constructions is a leading integrated MEP (Mechanical,
                Electrical and Plumbing) service provider in Himachal Pradesh,
                known for its vast experience and expertise in delivering
                high-quality solutions across the building, industrial, and
                infrastructure sectors. As a trusted turnkey provider for all
                MEP needs, Arunyah Constructions has successfully supported
                numerous clients entering the Himachal market, earning their
                trust and becoming a preferred partner for projects across the
                region.
              </p>
            </div>

            {/* Right Column */}
            <div
              className="col-xl-6 d-none d-xl-block ms-auto"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="position-relative ms-5">
                <img
                  src={constructionImage}
                  alt="Business Meeting"
                  className="img-fluid rounded-4 shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-secondary my-2  my-sm-5 my-5 py-4 py-md-5">
        <div className="container my-2  my-sm-5 ">
          <h2 className="my-2 my-sm-4  text-light">Key Strengths</h2>

          <div className="row mt-3  g-3 g-md-5">
            {cardData.map((card, index) => (
              <KeyStrength key={index} {...card} />
            ))}
          </div>
        </div>

        <div className="row   justify-content-center">
          <div className="col-md-10 bg-primary"></div>
        </div>
      </div>

      <div className="container py-2  py-md-5">
        <div className="row   justify-content-center">
          <div className="d-flex col-md-6 flex-column flex-md-row rounded-1 py-2 py-md-5 px-3  custom-card">
            {/* Card Text Content */}
            <div className="card-body">
              <h3 className="card-title text-secondary">
                Company Vision & Mission
              </h3>

              <hr className="custom-badge" />
              <p className="text-primary fs-3 text">
                {/* <FaCalendar /> */}
                <i className="bi bi-chevron-double-right"></i>
                Vision
              </p>
              <p className="card-text text-secondary">
                To be the most trusted and innovative MEP service provider in
                Himachal Pradesh, delivering solutions that enhance lives and
                promote sustainability
              </p>
              <hr className="custom-badge" />
              <p className="text-primary fs-3 text">
                {/* <FaCalendar /> */}
                <i className="bi bi-chevron-double-right"></i>
                Mission
              </p>
              <p className="card-text text-secondary">
                Our mission is to provide reliable, safe, and energy-efficient
                electrical solutions tailored to meet the diverse needs of our
                clients. We strive to build long-lasting relationships through
                trust and professionalism.
              </p>
            </div>
          </div>
          {/* Card Image */}
          <div className="col-md-6 d-none  d-md-block">
            <img
              src={visionImage}
              alt="Podcast"
              className="img-fluid rounded-1"
            />
          </div>
        </div>
      </div>

      <section className="bg-primary py-2 py-sm-5">
        <div className="container my-2 my-sm-5">
          <div className="row">
            {/* Left Section */}
            <div className="col-md-5 d-flex flex-column justify-content-center text-light p-4">
              <h2 className="fw-bold">We Provide Solutions</h2>
              <img
                src={image} // Replace with actual image URL
                alt="Electrical tools"
                className="img-fluid mt-3 rounded"
              />
              <div className="mt-3 d-flex align-items-center">
                <span className="ms-2">
                  <i className="bi bi-globe me-1"></i> Website:{" "}
                  <a
                    href="https://www.arunyah.com"
                    className="text-light fw-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.arunyah.com
                  </a>
                </span>
              </div>
            </div>

            {/* Right Section */}
            <div className="col-md-7  p-4">
              {/* Mechanical Services */}
              <section>
                <h4 className="text-light fw-bold">1. Mechanical Services</h4>
                <ul className="text-light">
                  <li>
                    <strong>
                      HVAC (Heating, Ventilation, Air Conditioning) Systems:
                    </strong>
                    <p className="m-0">
                      Design, installation, and maintenance of energy-efficient
                      HVAC solutions.
                    </p>
                    <p className="m-0">
                      Expertise in cooling, heating, and ventilation for
                      residential, commercial, and industrial setups.
                    </p>
                  </li>
                  <li>
                    <strong>Industrial Piping:</strong>
                    <p className="m-0">
                      Comprehensive piping solutions for process plants and
                      factories.
                    </p>
                  </li>
                  <li>
                    <strong>Renewable Energy Systems:</strong>
                    <p className="m-0">
                      Implementation of solar energy, geothermal heating, and
                      energy recovery systems.
                    </p>
                  </li>
                </ul>
              </section>

              {/* Electrical Services */}
              <section>
                <h4 className="text-light fw-bold">2. Electrical Services</h4>
                <ul className="text-light">
                  <li>
                    <strong>Power Distribution:</strong>
                    <p className="m-0">
                      Advanced electrical layouts for high-rise buildings,
                      industrial plants, and infrastructure projects.
                    </p>
                  </li>
                  <li>
                    <strong>Lighting and Automation:</strong>
                    <p className="m-0">
                      Smart lighting systems integrated with IoT for energy
                      optimization.
                    </p>
                  </li>
                  <li>
                    <strong>Backup Power Solutions:</strong>
                    <p className="m-0">
                      Installation of reliable generators, UPS systems, and
                      power redundancy setups.
                    </p>
                  </li>
                </ul>
              </section>

              {/* Plumbing Services */}
              <section>
                <h4 className="text-light fw-bold">3. Plumbing Services</h4>
                <ul className="text-light">
                  <li>
                    <strong>Water Supply and Drainage:</strong>
                    <p className="m-0">
                      Advanced plumbing systems ensuring reliable water
                      distribution and waste management.
                    </p>
                  </li>
                  <li>
                    <strong>Sewage Treatment Plants (STPs):</strong>
                    <p className="m-0">
                      Designing and installing efficient STPs for sustainable
                      waste processing.
                    </p>
                  </li>
                  <li>
                    <strong>Fire Protection Systems:</strong>
                    <p className="m-0">
                      State-of-the-art firefighting solutions, including
                      hydrants and sprinkler systems.
                    </p>
                  </li>
                </ul>
              </section>

              {/* Integrated Turnkey MEP Solutions */}
              <section>
                <h4 className="text-light fw-bold">
                  4. Integrated Turnkey MEP Solutions
                </h4>
                <p className=" text-light">
                  End-to-end project delivery, combining design, execution,
                  testing, and maintenance services.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <MEPservices />
      <SafetyPolicies />
      <BuildingsProjects />
      <CompletedProjects />
      <SalesBook />
      <CompanyAchivements />
      <WhatMakesUsDifferent />
      <ContactSection/>
    </>
  );
}

export default Construction;
