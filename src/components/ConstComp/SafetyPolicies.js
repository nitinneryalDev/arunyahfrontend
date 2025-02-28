import React from "react";

const SafetyPolicies = () => {
  const safetyCommitments = [
    "Ensure compliance with all relevant statutory and safety provisions.",
    "Promote safety awareness through campaigns and training programs.",
    "Provide adequate resources to fully implement our Safety Policy."
  ];

  const espProjectManagement = [
    "Issue and use of Personal Protective Equipment (PPE)",
    "Electrical work safety",
    "Material handling and manual lifting",
    "Safe use of ladders, scaffolds, and work platforms",
    "Working at heights and fall protection",
    "Sheet metal work safety"
  ];

  const espManufacturing = [
    "Handling compressed gas cylinders",
    "Gas cutting and arc welding safety",
    "Mobile crane safety",
    "Proper storage, stacking, and carrying of materials",
    "Barricading work areas",
    "Fire-fighting preparedness",
    "First aid readiness"
  ];

  const qualityCommitments = [
    {
      title: "Customer Focus",
      points: [
        "Understand and meet the specific needs and expectations of our customers.",
        "Ensure timely delivery of products and services without compromising quality."
      ]
    },
    {
      title: "Continuous Improvement",
      points: [
        "Foster a culture of continuous improvement across all levels of the organization.",
        "Regularly review and enhance processes, systems, and technologies."
      ]
    },
    {
      title: "Employee Involvement",
      points: [
        "Engage and empower employees to take ownership of quality in their roles.",
        "Provide ongoing training and development to enhance skills and knowledge."
      ]
    }
  ];

  return (
    <div className="bg-secondary py-5">
      <div className="container py-5">
        {/* Safety Policy Header */}
        <div className="text-center mb-4">
          <h1 className="fw-bold">
            <span className="bg-warning text-primary px-3 py-2 rounded-pill shadow">
              Safety <span className="text-dark">Policy</span>
            </span>
          </h1>
        </div>

        {/* Policy Description */}
        <p className="text-center text-light">
          At Arunyah Constructions, safety is our top priority. We are committed to ensuring a safe workplace by integrating safety measures into every stage of our operations.
        </p>

        {/* Safety Commitments */}
        <div className="text-center my-4">
          <button className="btn btn-primary px-4 py-2 rounded-pill fw-bold shadow">Safety Commitments</button>
        </div>

        <ul className="list-unstyled text-light">
          {safetyCommitments.map((commitment, index) => (
            <li key={index}><strong>{index + 1}.</strong> {commitment}</li>
          ))}
        </ul>

        {/* ESPs in Project Management */}
        <h5 className="text-light text-center fw-bold mt-5">Essential Safety Practices (ESP) in Project Management:</h5>
        <div className="row text-light">
          <div className="col-md-6">
            <ul>
              {espProjectManagement.map((item, index) => (
                <li key={index}><strong>{index + 1}.</strong> {item}</li>
              ))}
            </ul>
          </div>
          <div className="col-md-6">
            <ul>
              {espManufacturing.map((item, index) => (
                <li key={index}><strong>{index + 1}.</strong> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Quality Policy Section */}
      <div className="container py-5">
        <div className="text-center mb-4">
          <h1 className="fw-bold">
            <span className="bg-warning text-primary px-3 py-2 rounded-pill shadow">
              Quality <span className="text-dark">Policy</span>
            </span>
          </h1>
        </div>

        <p className="text-center text-light fw-semibold">
          At <span className="fw-bold">Arunyah Constructions</span>, we strive for excellence through continuous improvement, customer satisfaction, and operational efficiency.
        </p>

        <div className="text-center mb-3">
          <button className="btn btn-primary px-4 py-2 rounded-pill fw-bold shadow">Commitments to Quality</button>
        </div>

        {qualityCommitments.map((commitment, index) => (
          <div key={index} className="mb-3">
            <h5 className="fw-bold text-primary">
              <i className="bi bi-chevron-right text-primary"></i> {commitment.title}:
            </h5>
            <ul className="ps-4 text-light">
              {commitment.points.map((point, subIndex) => (
                <li key={subIndex}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SafetyPolicies;
