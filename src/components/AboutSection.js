import React from 'react';
import avatarImage from '../assets/images/importexport.jpg'
import aboutImage1 from '../assets/images/itimages/pexels-product-school-1299359-2678468.jpg'
import aboutImage2 from '../assets/images/itimages/pexels-hillaryfox-1595385.jpg'

function AboutSection() {

// data.js
const aboutData = {
  title: "MORE ABOUT US",
  heading: "What Arunyah Offers You",
  description:
    "We are a hub of innovation, constantly pushing boundaries and exploring new horizons to stay at the forefront of technology.",
  highlights: [
    "Proven Expertise",
    "Cost-Effective Solutions",
    "Innovation Hub",
    "Client-Centric",
    "Global Reach",
  ],
  ceo: {
    image:avatarImage, // replace with avatarImage path
    name: "Gaurav Kalia",
    role: "COO",
    phone: "+91 647-354-2670",
  },
  experience: {
    years: 15,
    description: "Of experience in business service",
  },
  images: {
    aboutImage1: aboutImage1, // replace with actual path
    aboutImage2: aboutImage2, // replace with actual path
  },
};


  return (
    <section id="about" className="py-md-5 py-3 my-md-5">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 align-items-center">
          {/* Left Column */}
          <div className="col-xl-5" data-aos="fade-up" data-aos-delay="200">
            <span className="text-primary fw-bold">{aboutData.title}</span>
            <h2 className="mt-3">{aboutData.heading}</h2>
            <p className="text-muted my-4">{aboutData.description}</p>

            <div className="row">
              {aboutData.highlights.map((highlight, index) => ( 
                <div key={index} className="col-md-6">
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      {highlight}
                    </li>
                  </ul>
                </div>
              ))}
            </div>

            <div className="row align-items-center mt-4">
              <div className="col-lg-5">
                <div className="d-flex align-items-center">
                  <img
                    src={aboutData.ceo.image}
                    alt="CEO Profile"
                    className="rounded-circle me-3"
                    style={{ width: "60px", height: "60px" }}
                  />
                  <div>
                    <h6 className="mb-0">{aboutData.ceo.name}</h6>
                    <small className="text-muted">{aboutData.ceo.role}</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="d-flex align-items-center">
                  <i className="bi bi-telephone-fill text-primary fs-4 me-3"></i>
                  <div>
                    <p className="mb-0 small text-muted">Call us anytime</p>
                    <p className="mb-0 fw-bold">{aboutData.ceo.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-xl-6 d-none d-xl-block ms-auto" data-aos="fade-up" data-aos-delay="300">
            <div className="position-relative ms-5">
              <img
                src={aboutData.images.aboutImage1}
                alt="Business Meeting"
                className="img-fluid rounded-4 shadow"
              />
              <img
                src={aboutData.images.aboutImage2}
                alt="Team Discussion"
                className="img-fluid rounded-4 position-absolute top-50 start-0 translate-middle"
                style={{
                  width: "60%",
                  border: "3px solid #fff",
                  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
                }}
              />
              <div className="bg-primary text-white text-center rounded-4 py-3 px-4 position-absolute bottom-0 start-50 translate-middle-x">
                <h3 className="mb-0">
                  {aboutData.experience.years}+ <span className="small">Years</span>
                </h3>
                <p className="mb-0 small">{aboutData.experience.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
