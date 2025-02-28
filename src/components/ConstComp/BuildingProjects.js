import React from "react";
import building from "../../assets/images/construction/constructonn.jpg";
import buildingOne from "../../assets/images/construction/underconstructiontwo.jpg";
import buildingThree from "../../assets/images/construction/underconstructionone.jpg";
import buildingFour from "../../assets/images/construction/underconstructionseven.jpg";
import buildingFive from "../../assets/images/construction/underconstructionfour.jpg";
import buildingSeven from "../../assets/images/construction/underconstructioneight.jpg";
import buildingEight from "../../assets/images/construction/underconstructionfive.jpg";

const projects = [
  { title: "Buildings Projects", subtitle: "executed by us", bg: "", text: "text-primary" },
  { title: "Buildings Projects", subtitle: "ongoing by us", bg: "bg-primary", text: "text-light" },
  { title: "Plumbing Work", subtitle: "Piping", bg: "", text: "text-primary" },
  { title: "Bathroom and", subtitle: "Toilet", bg: "bg-secondary", text: "text-primary" },
  { title: "Fire Protection", subtitle: "System", bg: "", text: "text-primary" },
  { title: "Fire Alarm", subtitle: "System", bg: "bg-primary", text: "text-light" },
  { title: "Electrical", subtitle: "Works", bg: "", text: "text-primary" },
  { title: "Earth Excavation and", subtitle: "Filling Works", bg: "bg-secondary", text: "text-light" },
];

const images = [
  [buildingFour, buildingFive],
  [building, buildingOne, buildingSeven],
  [buildingThree, buildingEight],
];

const ProjectSection = ({ title, subtitle, bg, text }) => (
  <div className={`py-5 ${bg}`}>
    <div className="container text-center">
      <h1 className={`fw-bold d-inline-block bg-secondary px-4 my-5 py-2 rounded ${text}`}>{title} <span className="text-light">{subtitle}</span></h1>
      <div className="row">
        {images.map((col, index) => (
          <div key={index} className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            {col.map((img, i) => (
              <img key={i} src={img} className="w-100 shadow-1-strong rounded mb-4" alt="Construction Project" />
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const BuildingsProjects = () => {
  return (
    <div>
      {projects.map((project, index) => (
        <ProjectSection key={index} {...project} />
      ))}
    </div>
  );
};

export default BuildingsProjects;
