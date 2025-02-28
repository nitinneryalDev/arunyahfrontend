import React from "react";
import data from "../db.json";
import { useLocation } from 'react-router-dom';

function ContactUs() {
  const location = useLocation();

  const contactData = location.pathname === '/' ? data.ITcontactDetails : data.contactDetails;


  return (
    <section id="contact" className="contact section light-background py-5">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact Us</h2>
        <p>
          We’re here to assist you with tailored solutions and reliable support
          for your IT needs .
        </p>
      </div>

      <div className="container mt-5" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4 g-lg-5">
          {/* Contact Info */}
          <div className="col-lg-5 bg-primary text-white  p-4 rounded-4 ">
            <div className="info-box" data-aos="fade-up" data-aos-delay="200">
              <h3>Contact Info</h3>
              <p>
                For more information about any of our services, or to get a no
                obligation website design quotation, please contact us either by
                completing our online form or through the various contact
                methods.
              </p>
              {contactData.map((contact, index) => (
                <div key={index}>
                  <div
                    className="info-item d-flex gap-3"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div className="icon-box">
                      <i className="bi bi-geo-alt"></i>
                    </div>
                    {contact.address.map((addressLine) => (
                      <div className="content">
                        <h6>Our Location</h6>
                        <p className="fw-lighter w-50 mb-3 fs-6 text mb-1">
                          {addressLine}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div
                    className="info-item mb-3 d-flex gap-3"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <div className="icon-box">
                      <i className="bi bi-telephone"></i>
                    </div>
                    <div className="content">
                      <h6>Phone Number</h6>

                      <p className="fw-lighter fs-6 text mb-1">
                        {" "}
                        <span>
                          <a
                            className="text-white text-decoration-none"
                            href={`tel:${contact.phone}`}
                          >
                            {contact.phone}
                          </a>
                        </span>
                      </p>
                      <p className="fw-lighter fs-6 text mb-1">
                        {" "}
                        <span>
                          <a
                            className="text-white text-decoration-none"
                            href={`tel:${contact.phone2}`}
                          >
                            {contact.phone2}
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>

                  <div
                    className="info-item d-flex gap-3"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <div className="icon-box">
                      <i className="bi bi-envelope"></i>
                    </div>
                    <div className="content">
                      <h6>Email Address</h6>
                      <p className="fw-lighter fs-6 text mb-1">
                        <span>
                          <a
                            className="text-white text-decoration-none"
                            href={`mailto:${contact.email}`}
                          >
                            {contact.email}
                          </a>
                        </span>
                      </p>
                      <p className="fw-lighter mb-1 fs-6 text">
                        <span>
                          <a
                            className="text-white text-decoration-none"
                            href={`mailto:${contact.email}`}
                          >
                            {contact.email2}
                          </a>
                        </span>
                      </p>

                      <p className="fw-lighter  fs-6 text">
                        <span>
                          <a
                            className="text-white text-decoration-none"
                            href={`mailto:${contact.email3}`}
                          >
                            {contact.email3}
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <div
              className="contact-form"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3>Get In Touch</h3>
              <p>
                Have questions or need assistance? Our team is ready to help you
                with expert guidance and prompt support. Reach out to us today!
              </p>

              <form
                action=""
                method="post"
                className="php-email-form"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="6"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>

                  <div className="col-12 text-center">
                    {/* <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div> */}

                    <button
                      type="submit"
                      className="btn btn-secondary rounded-pill"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
