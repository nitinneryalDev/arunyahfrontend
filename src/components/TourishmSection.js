import React from 'react'
import data from "../db.json";
import shimla from '../assets/images/carouselimagetwo.jpg'
import cariyselImage  from "../assets/images/carouselimagethree.jpg"
import  dharmshala    from "../assets/images/dharmshala.jpg"
import laddakh from "../assets/images/ladakh.jpg"
import kasol from "../assets/images/kasol.jpg"
import chamba from "../assets/images/chamba.jpg"


function TourishmSection() {
  return (
    <section id="services" className="services section py-5 bg-primary">
    <div className="container section-title" data-aos="fade-up">
      <h2 className="text-white">Tour Destination Packages</h2>
      <p className="text-white">
      Discover breathtaking destinations with our exclusive tour packages tailored for unforgettable experiences.
      </p>
    </div>

    <div className="container">
    <div className="row py-5 gy-4">
  {data.TourimsData.map((packages) => (
    <div
      key={packages.id}
      className="col-lg-4 col-md-6"
      data-aos="fade-up"
      data-aos-delay={packages.delay}
    >
      <div className="card ">
        <div className="card-img p-1">
        <img
                    src={
                      packages.title === 'Shimla'
                        ? shimla
                        : packages.title === 'Kullu Manali'
                        ? cariyselImage
                        : packages.title === 'Dharamshala'
                        ? dharmshala
                        : packages.title === 'Kullu Manali'
                        ? cariyselImage
                        : packages.title === 'Leh Laddakh'
                        ? laddakh
                        : packages.title === 'Kasol'
                        ? kasol
                        : packages.title === 'Chamba'
                        ? chamba
                        : null // Handle cases where packages.img doesn't match image names
                    }
                    alt={packages.title}
                    className="img-fluid rounded"
                  />
        </div>
        <div className="px-4 mb-3 d-flex flex-column">
          <h3>
            <a href={packages.title} className="stretched-link text-decoration-none text-primary ">
              {packages.title}
            </a>
          </h3>
          <div className="d-flex my-2 justify-content-between">
          <span className="badge text-bg-warning">{packages.data}</span>
          
            {/* <h6 className="fst-italic fw-light fs-6">
              {packages.time}
            </h6> */}
          </div>
          <p className="m-0 text-overflow: ellipsis; white-space: nowrap;" style={{minHeight:'100px',height:"100px"}}>
            {packages.description}
          </p>
        </div>
        <button type="button" className="btn btn-primary m-4">
          Read More
        </button>
      </div>
    </div>
  ))}
</div>
    </div>
  </section>
  )
}

export default TourishmSection