import React from "react";
import data from "../db.json";

// Static import or correct relative paths for images
import milk from "../assets/images/milk.jpg";
import ghee from "../assets/images/ghee.jpg";
import chees from "../assets/images/cheesee.jpg";
import butter from "../assets/images/butter.jpg";
import Sweets from "../assets/images/sweets.jpg";
import curd from "../assets/images/curd.jpg";

function DairySection() {
  // Use const for the array definition
  const DairyImage = [
    { img: milk, name: "Milk" },
    { img: ghee, name: "Ghee" },
    { img: chees, name: "Chees" },
    { img: butter, name: "Butter" },
    { img: curd, name: "Curd / Lassi" },
    { img: Sweets, name: "Sweets" },
    
  ];

  return (
    <>
      <section>
        <div className="container py-5">
          <div className="row">
            {/* Left Highlight Section */}
            <div className="col-md-4 d-flex p-4 justify-content-center">
              <div className="highlight-section p-4 d-flex flex-column rounded-2 justify-content-center p-2 bg-primary text-white">
                <h2>Why Choose Our Dairy Products?</h2>
                <p>
                Experience the pure goodness of farm-fresh dairy products crafted with care and quality. Our commitment to sustainability and natural farming ensures every product is wholesome, nutritious, and free from artificial additives. Whether it’s fresh milk, creamy yogurt, or rich cheese, our dairy delivers the perfect balance of taste and health for your family.
                </p>
                <button type="button" className="btn mt-3 btn-light">
                  Learn More
                </button>
              </div>
            </div>
            {/* Right Feature Cards */}
            <div className="col-md-8 d-flex justify-content-center">
              <div className="row p-4">
                {data.DairyData?.map((data, index) => (
                  <div
                    key={index}
                    className="col-md-4 d-flex justify-content-center"
                  >
                    <div
                      className="card border-primary border"
                      style={{ maxWidth: "18rem" }}
                    >
                      <div className="card-body d-flex align-items-center flex-column justify-content-center">
                        <i className={`bi fs-5 ${data.icon}`}></i>
                        <h5 className="card-title text-center">{data.title}</h5>
                        <p className="card-text text-center">{data.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-primary">
        <div className="container section-title" data-aos="fade-up">
          <h2 className="text-white">Our Services</h2>
          <p className="text-white">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <div className="container text-center">
          <div className="row py-3 align-items-start">
            {DairyImage.map((data, index) => (
              <div key={index} className="col">
                <img
                  src={data.img}
                  className="img-fluid img-thumbnail rounded-circle"
                  style={{ width: "200px", height: "200px" }}
                  alt={data.name}
                />
                <p className="fs-6 mt-3 text-white fw-bolder">{data.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default DairySection;
