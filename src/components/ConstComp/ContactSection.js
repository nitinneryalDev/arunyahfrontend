import React from "react";
import contact from '../../assets/images/construction/contact.jpg'

const ContactSection = () => {
  return (
    <div className="bg-secondary py-5">  
    <div className="container py-5 px-md-5">
    <div className="row align-items-center">
      {/* Left Section - Contact Details */}
      <div className="col-md-6 text-start">
        <h1 className="fw-bold text-light">Let's Build Together!</h1>
        <p className="text-primary fs-5">
          Contact us today to discuss your MEP requirements.
        </p>

        <div className="mt-4">
        <div className="d-flex text-light" >
        <p className="fw-bold text-light me-2">
            <i className="bi bi-telephone-fill text-primary me-2 "></i> Phone
          </p>
          <p>+91 - 9206760006</p>
        </div>
        <div className="d-flex text-light" >
        <p className="fw-bold text-light me-2">
        <i className="bi bi-envelope-fill text-primary me-2"></i> Email
        </p>
        <p>arunyahenterprises@gmail.com</p>
        </div>
        <div className="d-flex text-light" >
        <p className="fw-bold text-light me-2">
        <i className="bi bi-geo-alt-fill text-primary me-2"></i> Office
        </p>
        <p>
            VPO Bharmar, Tehsil Jawali, District Kangra, Himachal Pradesh
          </p>
        </div>
        <div className="d-flex text-light" >
        <p className="fw-bold text-light me-2">
        <i className="bi bi-globe text-primary me-2"></i> Website
        </p>
     
        <p>www.arunyah.com</p>
     
        </div>


      
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="col-md-6 position-relative">
        <div className="position-relative">
          <img
            src={contact}
            alt="Customer Support"
            className="img-fluid rounded"
          />
        </div>

        {/* Overlay Badge */}
        <div className="position-absolute bottom-0 start-50 translate-middle-x bg-primary text-light px-4 py-2 rounded-pill text-center">
          <p className="mb-0 fw-bold">
            Shaping the Future of MEP Systems in Himachal
          </p>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
};

export default ContactSection;
