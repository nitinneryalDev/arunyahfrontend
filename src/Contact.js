import React from "react";
import ContactUs from "./components/ContactUs";




const Contact = () => {
  return (
    <div
      className="page-title aos-init  position-relative aos-animate"
      data-aos="fade">
      <div className=" contact_container text-center h-50 text-white py-5">
        <h1>Contact</h1>
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
            <li className="breadcrumb-item active text-white" aria-current="page">
              Contact
            </li>
          </ol>
        </nav>
      </div>
      <div>
      <ContactUs/>

      </div>
    </div>
  );
};

export default Contact;