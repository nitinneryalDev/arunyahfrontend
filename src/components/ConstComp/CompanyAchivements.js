import React from 'react'

function CompanyAchivements() {
  return (
    <div>
<div className="container  my-4">
      {/* Header */}
      <div className="text-start">
        <h2 className="fw-bold text-primary">Company <span className="text-dark">Achievement</span></h2>
      </div>

      {/* Achievements Timeline */}
      <div className="row mt-4">
        {/* 2021 Achievement */}
        <div className="col-md-12 d-flex align-items-center mb-3">
          <div className="badge bg-primary text-white p-3 fs-5">2021</div>
          <div className="bg-secondary text-white p-3 ms-3 rounded shadow-sm flex-grow-1">
            Laying the Foundation for Growth
          </div>
        </div>

        {/* 2022 Achievement */}
        <div className="col-md-12 d-flex align-items-center mb-3">
          <div className="badge bg-primary text-white p-3 fs-5">2022</div>
          <div className="bg-secondary text-white p-3 ms-3 rounded shadow-sm flex-grow-1">
            Expansion into Residential, Commercial, and Educational Projects
          </div>
        </div>

        {/* 2023 Achievement */}
        <div className="col-md-12 d-flex align-items-center mb-3">
          <div className="badge bg-primary text-white p-3 fs-5">2023</div>
          <div className="bg-secondary text-white p-3 ms-3 rounded shadow-sm flex-grow-1">
            Growth in Industrial Facilities and Sustainable Solutions
          </div>
        </div>

        {/* 2024 Achievement */}
        <div className="col-md-12 d-flex align-items-center mb-3">
          <div className="badge bg-primary text-white p-3 fs-5">2024</div>
          <div className="bg-secondary text-white p-3 ms-3 rounded shadow-sm flex-grow-1">
            Strengthening Leadership in Hospitality, Government, and Luxury Segments
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CompanyAchivements