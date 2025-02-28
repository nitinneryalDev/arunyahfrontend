import React from "react";
import CommonHero from "./components/CommonHero";
import data from "./db.json";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div
      className="page-title aos-init  position-relative aos-animate"
      data-aos="fade"
    >
      <CommonHero
        title="Services"
        description="Delivering excellence across  services with reliability and innovation."
        clsnm="services_container"
      />

      <div className="container py-5">
        <div className="row gy-4">
          <div
            className="col-lg-4 col-md-6 service-item d-flex gap-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="icon flex-shrink-0">
              <i className="bi bi-cart4 fs-2"></i>
            </div>
            <div>
              <h4 className="title">Commitment to Excellence</h4>
              <p className="description">
                Our mission is to deliver top-notch solutions that combine
                innovation, efficiency, and reliability. We strive to exceed
                expectations, ensuring every service we provide reflects our
                dedication to excellence.
              </p>
              {/* <Link
                to="/"
                className="readmore stretched-link text-decoration-none"
              >
                <span>Learn More</span>
                <i className="bi bi-arrow-right "></i>
              </Link> */}
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 service-item d-flex gap-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="icon flex-shrink-0">
              <i className="bi bi-truck fs-2"></i>
            </div>
            <div>
              <h4 className="title">Tailored Solutions</h4>
              <p className="description">
                We understand that every client is unique. Our approach focuses
                on creating personalized solutions that cater to your specific
                needs, ensuring seamless integration and maximum impact.
              </p>
              {/* <Link
                to="/"
                className="readmore stretched-link text-decoration-none"
              >
                <span>Learn More</span>
                <i className="bi bi-arrow-right "></i>
              </Link> */}
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 service-item d-flex gap-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="icon flex-shrink-0">
              <i className="bi bi-unity fs-2"></i>
            </div>
            <div>
              <h4 className="title"> Industry Expertise</h4>
              <p className="description">
                With years of experience across diverse industries, our team
                brings unparalleled expertise to the table. From technology to
                transportation, real estate, and travel, we provide services you
                can trust.
              </p>
              {/* <Link
                to="/"
                className="readmore stretched-link text-decoration-none"
              >
                <span className="text-decoration-none">Learn More</span>
                <i className="bi bi-arrow-right"></i>
              </Link> */}
            </div>
          </div>
        </div>
      </div>

      <section id="services" className="services section py-5  bg-secondary ">
        <div className="container section-title" data-aos="fade-up">
          <h2 className="text-white">Our Services</h2>
          <p className="text-white">
            we bring innovation, dedication, and expertise to every project we
            undertake. From IT solutions to transportation, real estate, and
            travel, we’re committed to delivering value-driven services that
            cater to your diverse needs. Let us help you achieve your goals with
            precision and reliability.
          </p>
        </div>
      </section>

      <section id="features" className="features section py-4 py-sm-5">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          {/* <span>Features</span> */}
          <h2>Features</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>


        <div className="container">

          {data.features.map((feature, index) => (
            <div className="card-body rounded-5  ">
            <div className="mt-0 mt-sm-4">

            <Link
              to={feature.route}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-secondary"
            >
              <div
                key={feature.id} // Add a unique key to the outer div element
                className={`row gy-4 p-3 p-sm-4 my-0 my-sm-5  align-items-center text-light  rounded   features-item ${
                  feature.reverse ? "flex-row-reverse bg-secondary hover-bg-secondary" : "bg-primary hover-bg-primary"
                }`}
              >


               
               
               
               
               
               
               
                <div
                  className="col-md-5 d-flex align-items-center"
                  data-aos="zoom-out"
                  data-aos-delay={100 * (index + 1)}
                >
                  <img
                    src={require(`${feature.image}`)}
                    className="img-fluid rounded-4"
                    alt={`Feature ${feature.id}`}
                  />
                </div>

                <div
                  className="col-md-7"
                  data-aos="fade-up"
                  data-aos-delay={100 * (index + 1)}
                >
                  <h3 className="text-decoration-none   ">{feature.name}</h3>
                  <p className="fst-italic text-decoration-none ">
                    {feature.description}
                  </p>
                  {feature.points && (
                    <ul className="ps-1">
                      {feature.points.map((point, idx) => (
                        <li style={{ listStyleType: "none" }} key={idx}>
                          <i className="bi bi-check"></i> <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {feature.extraText && <p>{feature.extraText}</p>}
                </div>



              </div>
            </Link>

</div>
</div>


          ))}
        </div>




        
      </section>
    </div>
  );
};

export default Services;
