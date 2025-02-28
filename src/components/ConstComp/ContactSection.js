import React from "react";
import contact from "../../assets/images/construction/contact.jpg";

const contactDetails = [
  { icon: "bi-telephone-fill", label: "Phone", value: "+91 - 9206760006" },
  { icon: "bi-envelope-fill", label: "Email", value: "arunyahenterprises@gmail.com" },
  { icon: "bi-geo-alt-fill", label: "Office", value: "VPO Bharmar, Tehsil Jawali, District Kangra, Himachal Pradesh" },
  { icon: "bi-globe", label: "Website", value: "www.arunyah.com" },
];

const ContactInfoItem = ({ icon, label, value }) => (
  <div className="d-flex text-light mb-2">
    <p className="fw-bold text-light me-2">
      <i className={`bi ${icon} text-primary me-2`}></i> {label}
    </p>
    <p className="mb-0">{value}</p>
  </div>
);

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
              {contactDetails.map((detail, index) => (
                <ContactInfoItem key={index} {...detail} />
              ))}
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="col-md-6 position-relative">
            <img src={contact} alt="Customer Support" className="img-fluid rounded" />

            {/* Overlay Badge */}
            <div className="position-absolute bottom-0 start-50 translate-middle-x bg-primary text-light px-4 py-2 rounded-pill text-center">
              <p className="mb-0 fw-bold">Shaping the Future of MEP Systems in Himachal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
