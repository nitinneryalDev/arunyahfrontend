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
              href="index.html"
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
                <strong>Phone:</strong> <span>+91 9206760006</span>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <span>arunyahenterprises@gmail.com</span>
              </p>
            </div>
            <div className="social-links d-flex mt-4">
              <Link href="/">
                <i className="bi bi-twitter-x"></i>
              </Link>
              <Link href="/">
                <i className="bi bi-facebook"></i>
              </Link>
              <Link href="/">
                <i className="bi bi-instagram"></i>
              </Link>
              <Link href="www.linkedin.com/company/arunyah-enterprises-pvt">
                <i className="bi bi-linkedin"></i>
              </Link>
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
                    href={industry.href}
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
