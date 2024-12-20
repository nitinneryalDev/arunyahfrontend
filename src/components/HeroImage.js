import React from 'react'
import carouselImageone from "../assets/images/corporate/carouselImageone.jpg";
import carouselImagetwo from "../assets/images/corporate/carouselImagetwo.jpg";
import carouselimagethree from '../assets/images/corporate/carouselImagethree.jpg'


function HeroImage() {

  const carouselData = [
    {
      id: 1,
      image: carouselImageone, // Replace with your actual image import or URL
      title: "Innovative Web Development Solutions.",
      description:
        "Arunyah delivers tailored web development solutions using advanced technologies to meet your business needs, create a strong online presence, and drive lasting growth and success.",
      interval: 10000,
      active: true,
    },
    {
      id: 2,
      image: carouselImagetwo, // Replace with your actual image import or URL
      title: "Custom Web Development Services For Better Websites",
      description:
        "Crafted with Intelligence, Precision, and Style. We design captivating brands, websites, and digital experiences that make a lasting impression.",
      interval: 2000,
      active: false,
    },
    {
      id: 3,
      image: carouselimagethree, // Replace with your actual image import or URL
      title: "Boosting Businesses with Cutting-Edge Digital Solutions",
      description:"Partner with us for software development, transforming businesses with innovative solutions, achieving digital goals, and staying competitive in a rapidly evolving world.",
      interval: 3000,
      active: false,
    },
  ];
  

  return (

<div
  id="carouselExampleDark"
  className="carousel carousel-dark text-white slide"
  data-bs-ride="carousel"
>
  {/* Carousel Indicators */}
  <div className="carousel-indicators">
    {carouselData.map((item, index) => (
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
    {carouselData.map((item, index) => (
      <div
        key={item.id}
        className={`carousel-item ${item.active ? "active" : ""}`}
        data-bs-interval={item.interval}
      >
        <div className="carousel-image-wrapper position-relative">
          <img
            src={item.image} // Use item.image for dynamic image loading
            className="d-block w-100"
            alt={`Slide ${index + 1}`}
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

  )
}

export default HeroImage