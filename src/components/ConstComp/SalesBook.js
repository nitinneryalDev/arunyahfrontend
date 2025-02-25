import React from 'react'

function SalesBook() {
  return (
    <div className='bg-secondary py-5   ' >
    <div className="container my-4">
    <div className="text-center">
      <h2 className="fw-bold text-primary">Sales Book</h2>
    </div>

    <div className="row align-items-center">
      {/* Chart Section */}
      <div className="col-md-6">
        <div className="text-center">
          <h5 className="fw-bold text-light">Sales (In lakhs)</h5>
          <div className="d-flex justify-content-center">
            <div className="bar-chart d-flex justify-content-end align-items-end" style={{ height: "250px" }}>
              <div className="bar bg-primary text-white p-2" style={{ height: "180px", width: "80px", margin: "5px" }}>180</div>
              <div className="bar bg-primary text-white p-2" style={{ height: "220px", width: "80px", margin: "5px" }}>220</div>
              <div className="bar bg-primary text-white p-2" style={{ height: "200px", width: "80px", margin: "5px" }}>200</div>
            </div>
          </div>
          <div className="d-flex text-light justify-content-center">
            <span className='px-3' >FY 21-22</span>
            <span className='px-3'>FY 22-23</span>
            <span className='px-3'>FY 23-24</span>
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="col-md-6">
        <div className="p-3 bg-light rounded">
          <p>
            In the initial phase, the work primarily involved private projects, including schools, hotels, houses, and homestays, managed independently. 
            With the establishment of the company, operations expanded significantly to include government projects in addition to private ventures. 
            This transition marked a crucial step in diversifying the project portfolio and adopting a more structured and efficient approach to handle 
            larger and more complex assignments.
          </p>
        </div>
      </div>
    </div>

    {/* Table Section */}
    <div className="row mt-4">
      <div className="col-12">
        <table className="table table-bordered text-center">
          <thead className="table-dark">
            <tr>
              <th>Financial Year</th>
              <th>2021 - 2022</th>
              <th>2022 - 2023</th>
              <th>2023 - 2024</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sales (In lakhs)</td>
              <td>180</td>
              <td>220</td>
              <td>200</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Footer */}
    <div className="text-end mt-3">
    </div>
  </div>
  </div>
  )
}

export default SalesBook