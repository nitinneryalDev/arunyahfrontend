import React from "react";
import data from "../db.json";

function HeroImage() {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark text-white slide"
      data-bs-ride="carousel"
    >
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        {data.carouselData.map((item, index) => (
          <button
            key={item.id}
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={index}
            className={item.active ? "active" : ""}
            aria-current={item.active ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Carousel Items */}
      <div className="carousel-inner position-relative text-white">
        {data.carouselData.map((item) => (
          <div
            key={item.id}
            className={`carousel-item ${item.active ? "active" : ""}`}
            data-bs-interval={item.interval}
          >
            <div className="carousel-image-wrapper position-relative">
              <img
              src={require(`../${item.image}`)}
              // src={item.image}
                className="d-block w-100"
                alt={item.title || "Carousel slide"}
              />
              <div className="carousel-overlay w-100 h-100 overlay position-absolute top-50 start-50 translate-middle"></div>
            </div>
            <div className="carousel-caption d-none d-md-block text_content position-absolute bottom-50 end-50">
              <h5 className="text-white text-start fs-2 text">{item.title}</h5>
              <p className="text-white text-start">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default HeroImage;
