import React from 'react';
import data from '../db.json'

const TeamMember = ({ image, name, position, description }) => (
  <div className="col-lg-3 mb-4">
    <div className="card text-center">
      <img
        src={image}
        // src={require(`${image}`)}
        // src={require  (`${image}`)}
        alt={name}
        className="card-img-top rounded-circle mx-auto mt-3"
        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title mt-3">{name}</h5>
        <h6 className="text-muted mb-3">{position}</h6>
        <p className="card-text">{description}</p>
        <div className="d-flex justify-content-center">
          <a href="#" className="text-decoration-none mx-2">
          <i className="bi bi-facebook text-primary"></i>
          </a>
          <a href="#" className="text-decoration-none mx-2">
          <i className="bi bi-twitter-x text-primary"></i>
          </a>
          <a href="#" className="text-decoration-none mx-2">
          <i className="bi bi-instagram text-primary"></i>
          </a>
          <a href="#" className="text-decoration-none mx-2">
          <i className="bi bi-linkedin text-primary"></i>

          </a>
        </div>
      </div>
    </div>
  </div>
);

const TeamSection = () => {
  return (
    <div className="py-5 bg-secondary">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-md-7 text-center">
            <h3 className="mb-3 text-light ">Experienced & Professional Team</h3>
            <p className=" text-light">
              You can rely on our amazing features list and customer services for a great experience.
            </p>
          </div>
        </div>
        <div className="row">
          {data.teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
