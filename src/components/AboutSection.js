import React from 'react'
import avatarImage from  "../assets/images/corporate/carouselImageone.jpg";
import aboutImage1 from "../assets/images/corporate/carouselImagetwo.jpg";
import aboutImage2 from '../assets/images/corporate/carouselImagethree.jpg'
// import carouselImageone from "../assets/images/corporate/carouselImageone.jpg";
// import carouselImagetwo from "../assets/images/corporate/carouselImagetwo.jpg";
// import carouselimagethree from '../assets/images/corporate/carouselImagethree.jpg'

function AboutSection() {
  return (
    <section id="about" className="py-md-5 py-3 my-md-5">
    <div className="container" data-aos="fade-up" data-aos-delay="100">
      <div className="row gy-4 align-items-center">
        {/* Left Column */}
        <div className="col-xl-5" data-aos="fade-up" data-aos-delay="200">
          <span className="text-primary fw-bold">MORE ABOUT US</span>
          <h2 className="mt-3">What Arunyah Offers You</h2>
          <p className="text-muted my-4">
          We are a hub of innovation, constantly pushing boundaries and exploring new horizons to stay at the forefront of technology.          </p>

          <div className="row">
            <div className="col-md-6">
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>Proven Expertise
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>Cost-Effective Solutions
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>Innovation Hub
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>Client-Centric
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>Global Reach
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>Client-Centric
                </li>
              </ul>
            </div>
          </div>

          <div className="row align-items-center mt-4">
            <div className="col-lg-5">
              <div className="d-flex align-items-center">
                <img
                  src={avatarImage}
                  alt="CEO Profile"
                  className="rounded-circle me-3"
                  style={{ width: "60px", height: "60px" }}
                />
                <div>
                  <h6 className="mb-0"></h6>
                  <small className="text-muted">CEO &amp; Founder</small>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="d-flex align-items-center">
                <i className="bi bi-telephone-fill text-primary fs-4 me-3"></i>
                <div>
                  <p className="mb-0 small text-muted">Call us anytime</p>
                  <p className="mb-0 fw-bold">+91 9206760006</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-xl-6 d-none d-xl-block ms-auto" data-aos="fade-up" data-aos-delay="300">
          <div className="position-relative ms-5">
            <img
              src={aboutImage1}
              alt="Business Meeting"
              className="img-fluid rounded-4 shadow"
            />
            <img
              src={aboutImage2}
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
                15+ <span className="small">Years</span>
              </h3>
              <p className="mb-0 small">Of experience in business service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default AboutSection