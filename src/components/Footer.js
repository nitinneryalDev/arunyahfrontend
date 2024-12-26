// Footer.js
import React from "react";
import { Link } from "react-router-dom";
import data from "../db.json";

const Footer = () => {
  return (
    <footer id="footer" className="footer  bg-primary text-white">
      <div className="container footer-top  ">
        <div className="row pt-4 gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <Link
              to="/"
              className="logo d-flex align-items-center text-decoration-none"
            >
              <span className="sitename text-decoration-none text-white">
                ARUNYAH
              </span>
            </Link>
            <div className="footer-contact pt-3">
              <p>20 trevino crescent, Brampton, ON L6P1L9, 1L9</p>
              <p> Brampton, ON L6P1L9, 1L9, Brampton, Ontario</p>
              <p>Canada L6P, CA</p>
              <p className="mt-3">
                <strong>Phone:</strong>{" "}
                <span>
                  <a
                    className="text-white text-decoration-none"
                    href="tel:+91 9206760006"
                  >
                    {" "}
                    +91 9206760006
                  </a>
                </span>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <span>
                  <a
                    className="text-white text-decoration-none"
                    href="arunyahenterprises@gmail.com"
                  >
                    arunyahenterprises@gmail.com
                  </a>
                </span>
              </p>
            </div>
            <div className="social-links d-flex mt-4">
              <Link href="/">
                <i className="bi bi-twitter-x"></i>
              </Link>
              <Link href="https://www.instagram.com/arunyahenterprises//">
                <i className="bi bi-facebook"></i>
              </Link>
              <a href="https://www.instagram.com/arunyahenterprises/">
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/arunyah-enterprises-pvt"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul className="mt-3">
              {data.footerLinks.map((link, index) => (
                <li className="mb-2" key={index}>
                  <Link
                    className="text-decoration-none text-white fw-light"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul className="mt-3">
              {data.services.map((service, index) => (
                <li className="mb-2" key={index}>
                  <Link
                    className="text-decoration-none text-white fw-light"
                    href={service.href}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Industries</h4>
            <ul className="mt-3">
              {data.features.map((industry, index) => (
                <li className="mb-2" key={index}>
                  <Link
                    className="text-decoration-none text-white fw-light"
                    to={industry.href}
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Quick Links</h4>
            <ul className="mt-3">
              {data.quickLinks.map((link, index) => (
                <li className="mb-2" key={index}>
                  <Link
                    className="text-decoration-none text-white fw-light"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="container copyright text-center pb-3 mt-4">
        <div className="d-flex my-2 justify-content-center ">
          <span>
            {" "}
            <Link
              className="text-decoration-none text-white p-2 fw-light"
              href="/"
            >
              T&C
            </Link>
          </span>{" "}
          <span>
            {" "}
            <Link
              className="text-decoration-none p-2 text-white fw-light"
              href="/"
            >
              Privacy Policy
            </Link>
          </span>
        </div>
        <p>
          © <span>Copyright</span>{" "}
          <strong className="px-1 sitename">Arunyah PVT LTD</strong>{" "}
          <span>All Rights Reserved</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
