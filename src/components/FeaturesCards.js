import React from "react";

const FeaturesCards = () => {
  const features = [
    {
      icon: "bi bi-award",
      title: "Planning",
      description:
        "Aligning objectives, optimizing resources, and ensuring resilient solutions for future technology demands.",
      color: "orange",
      delay: 100,
    },
    {
      icon: "bi bi-patch-check",
      title: "Design",
      description:
        "Elevating user experiences, our design in IT blends creativity and functionality for seamless, impactful solutions.",
      color: "blue",
      delay: 200,
    },
    {
      icon: "bi bi-sunrise",
      title: "Development",
      description:
        "Coding the future, our development in IT crafts robust, scalable solutions, driving innovation and digital transformation.",
      color: "green",
      delay: 300,
    },
    {
      icon: "bi bi-shield-check",
      title: "Launch",
      description:
        "Our launch process ensures a seamless transition, optimizing performance for successful project liftoff.",
      color: "red",
      delay: 400,
    },
  ];

  return (
    <section id="features-cards " className="py-5 px-2 bg-light  py-md-5">
      <div className="container">
        <div className="row gy-4">
          {features.map((feature, index) => (
            <div
              className="col-xl-3 col-md-6"
              data-aos="zoom-in"
              data-aos-delay={feature.delay}
              key={index}
            >
              <div className={`feature-box text-center p-4 rounded shadow ${feature.color}`}>
                <i className={`${feature.icon} display-4 text-primary mb-3`}></i>
                <h4 className="mb-2">{feature.title}</h4>
                <p className="text-muted">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesCards;
