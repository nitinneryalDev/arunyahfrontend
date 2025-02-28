import React from "react";

const achievements = [
  { year: "2021", description: "Laying the Foundation for Growth" },
  { year: "2022", description: "Expansion into Residential, Commercial, and Educational Projects" },
  { year: "2023", description: "Growth in Industrial Facilities and Sustainable Solutions" },
  { year: "2024", description: "Strengthening Leadership in Hospitality, Government, and Luxury Segments" },
];

const AchievementItem = ({ year, description }) => (
  <div className="col-md-12 d-flex align-items-center mb-3">
    <div className="badge bg-primary text-white p-3 fs-5">{year}</div>
    <div className="bg-secondary text-white p-3 ms-3 rounded shadow-sm flex-grow-1">
      {description}
    </div>
  </div>
);

function CompanyAchievements() {
  return (
    <div className="container my-4">
      {/* Header */}
      <div className="text-start">
        <h2 className="fw-bold text-primary">
          Company <span className="text-dark">Achievements</span>
        </h2>
      </div>

      {/* Achievements Timeline */}
      <div className="row mt-4">
        {achievements.map((achievement, index) => (
          <AchievementItem key={index} {...achievement} />
        ))}
      </div>
    </div>
  );
}

export default CompanyAchievements;
