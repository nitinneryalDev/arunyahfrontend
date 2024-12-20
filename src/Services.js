import React from "react";
import construction from "./assets/images/Construction.jpg";
import tour from "./assets/images/carouselimagethree.jpg";
import dairy from "./assets/images/dairy.jpg";
import agriculture from "./assets/images/agriculture.jpg";
import itservices from "./assets/images/itservices.jpg";
import transportion from "./assets/images/transportion.jpg";
import realestate from "./assets/images/realestate.jpg";
import importexport from "./assets/images/importexport.jpg";
import data from "./db.json";

const Services = () => {
  const featuresImages = [
    {
      image: tour, // Replace with your dynamic import or path
    },
    {
      image: construction, // Replace with your dynamic import or path
    },
    {
      image: dairy, // Replace with your dynamic import or path
    },
    {
      image: agriculture, // Replace with your dynamic import or path
    },
    {
      image: itservices, // Replace with your dynamic import or path
    },
    {
      image: transportion, // Replace with your dynamic import or path
    },
    {
      image: realestate, // Replace with your dynamic import or path
    },
    {
      image: importexport, // Replace with your dynamic import or path
    },
  ];

  return (
    <div
      className="page-title aos-init  position-relative aos-animate"
      data-aos="fade"
    >
      <div className=" services_container text-center h-50 text-white py-5">
        <h1>Services</h1>
        <p>
          Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat
          quibusdam quia assumenda numquam molestias.
        </p>
        <nav className="breadcrumbs d-inline-block">
          <ol className="breadcrumb bg-transparent p-0 m-0">
            <li className="breadcrumb-item">
              <a href="/" className="text-white text-decoration-none">
                Home
              </a>
            </li>
            <li
              className="breadcrumb-item active text-white"
              aria-current="page"
            >
              Services
            </li>
          </ol>
        </nav>
      </div>

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
              <h4 className="title">Lorem Ipsum</h4>
              <p className="description">
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi sint occaecati cupiditate non provident
              </p>
              <a
                href="#"
                className="readmore stretched-link text-decoration-none"
              >
                <span>Learn More</span>
                <i className="bi bi-arrow-right "></i>
              </a>
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
              <h4 className="title">Dolor Sitema</h4>
              <p className="description">
                Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat tarad limino ata
              </p>
              <a
                href="#"
                className="readmore stretched-link text-decoration-none"
              >
                <span>Learn More</span>
                <i className="bi bi-arrow-right "></i>
              </a>
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
              <h4 className="title">Sed ut perspiciatis</h4>
              <p className="description">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur
              </p>
              <a
                href="#"
                className="readmore stretched-link text-decoration-none"
              >
                <span className="text-decoration-none">Learn More</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <section id="services" className="services section py-5  bg-primary ">
        <div className="container section-title" data-aos="fade-up">
          <h2 className="text-white">Our Services</h2>
          <p className="text-white">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        {/* <div className="container  ">
          <div className="row py-5 gy-4">
          
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="card">
                <div className="card-img">
                  <img src={image} alt="Storage" className="img-fluid" />
                </div>
                <div className="p-4">
                  <h3>
                    <a href="#" className="stretched-link">
                      Warehousing
                    </a>
                  </h3>
                  <p>
                    Quas assumenda non occaecati molestiae. In aut earum sed
                    natus beatae in vero. Ab modi quisquam aut nostrum unde et
                    qui est non quo nulla
                  </p>
                </div>
              </div>
            </div>

          
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="card">
                <div className="card-img">
                  <img src={image} alt="Logistics" className="img-fluid" />
                </div>
                <div className="p-4">
                  <h3>
                    <a href="#" className="stretched-link">
                      Warehousing
                    </a>
                  </h3>
                  <p>
                    Quas assumenda non occaecati molestiae. In aut earum sed
                    natus beatae in vero. Ab modi quisquam aut nostrum unde et
                    qui est non quo nulla
                  </p>
                </div>
              </div>
            </div>

      
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="card">
                <div className="card-img">
                  <img src={image} alt="Cargo" className="img-fluid" />
                </div>
                <div className="p-4">
                  <h3>
                    <a href="#" className="stretched-link">
                      Warehousing
                    </a>
                  </h3>
                  <p>
                    Quas assumenda non occaecati molestiae. In aut earum sed
                    natus beatae in vero. Ab modi quisquam aut nostrum unde et
                    qui est non quo nulla
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="card">
                <div className="card-img">
                  <img src={image} alt="Trucking" className="img-fluid" />
                </div>
                <div className="p-4">
                  <h3>
                    <a href="#" className="stretched-link">
                      Warehousing
                    </a>
                  </h3>
                  <p>
                    Quas assumenda non occaecati molestiae. In aut earum sed
                    natus beatae in vero. Ab modi quisquam aut nostrum unde et
                    qui est non quo nulla
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="card">
                <div className="card-img">
                  <img src={image} alt="Packaging" className="img-fluid" />
                </div>
                <div className="p-4">
                  <h3>
                    <a href="#" className="stretched-link">
                      Warehousing
                    </a>
                  </h3>
                  <p>
                    Quas assumenda non occaecati molestiae. In aut earum sed
                    natus beatae in vero. Ab modi quisquam aut nostrum unde et
                    qui est non quo nulla
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="card">
                <div className="card-img">
                  <img src={image} alt="Warehousing" className="img-fluid" />
                </div>
                <div className="p-4">
                  <h3>
                    <a href="#" className="stretched-link">
                      Warehousing
                    </a>
                  </h3>
                  <p>
                    Quas assumenda non occaecati molestiae. In aut earum sed
                    natus beatae in vero. Ab modi quisquam aut nostrum unde et
                    qui est non quo nulla
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>

      <section id="features" className="features section py-5">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <span>Features</span>
          <h2>Features</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="container mt-4">
          {data.features.map((feature, index) => (
            <div
              key={feature.id}
              className={`row gy-4 py-5 align-items-center features-item ${
                feature.reverse ? "flex-row-reverse" : ""
              }`}
            >
              <div
                className="col-md-5 d-flex align-items-center"
                data-aos="zoom-out"
                data-aos-delay={100 * (index + 1)}
              > 
                <img
                  src={`/${feature.image}`}  
                  className="img-fluid"
                  alt={`Feature ${feature.id}`}
                />
      
              </div>
              
              <div
                className="col-md-7"
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)}
              >
                <h3>{feature.name}</h3>
                <p className="fst-italic">{feature.description}</p>
                {feature.points && (
                  <ul>
                    {feature.points.map((point, idx) => (
                      <li key={idx}>
                        <i className="bi bi-check"></i> <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {feature.extraText && <p>{feature.extraText}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
