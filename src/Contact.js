import React from "react";
import ContactUs from "./components/ContactUs";
import CommonHero from "./components/CommonHero";



const Contact = () => {
  return (
    <div
      className="page-title aos-init  position-relative aos-animate"
      data-aos="fade">
          <CommonHero
        title="Contact Us"
        description="We’re here to help! Reach out to us for inquiries, support, or feedback.   "
        clsnm="contact_container" 
         />
      <div>
      <ContactUs/>

      </div>
    </div>
  );
};

export default Contact;