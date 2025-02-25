import React from 'react'

function CompletedProjects() {
      const projects = [
        {
          id: 1,
          name: "De Montreal Convent School, Kangra",
          description: "Electrical, Plumbing Work and other mechanical works",
          client: "Mr. Pradeep Singh",
          orderDate: "15 January 2023",
          type: "Work Order",
          currency: "INR",
          amount: "22,00,000",
        },
        {
          id: 2,
          name: "Jyoti Palace, Nurpur",
          description: "MEP Work",
          client: "Mr. Jyoti Kumar",
          orderDate: "16 March 2023",
          type: "Work Order",
          currency: "INR",
          amount: "62,00,000",
        },
        {
          id: 3,
          name: "Tiny House, Udaipur, Lahul",
          description: "MEP Work Construction, Interior Designing",
          client: "Mrs. Promila",
          orderDate: "17 April 2023",
          type: "Work Order",
          currency: "INR",
          amount: "40,00,000",
        },
        {
          id: 4,
          name: "Hotel Midnight, Bar Restaurant",
          description: "MEP, Electrical, and Plumbing",
          client: "Sh. Lucky Chibb",
          orderDate: "7 June 2023",
          type: "Work Order",
          currency: "INR",
          amount: "30,00,000",
        },
        {
          id: 5,
          name: "Residential Project, Rehan",
          description: "Earth Excavation, Electrical, and Plumbing",
          client: "Mr. Pankaj Happy",
          orderDate: "23 July 2023",
          type: "Work Order",
          currency: "INR",
          amount: "25,00,000",
        },
        {
          id: 6,
          name: "Government Tender",
          description:
            "Replacement of lengthy PVC main and sub-main with bar conductor at Kotla Bara UESD Kotla. Reorganization of LD system by converting 1-phase to 3-phase to resolve low voltage issues in village Luthar.",
          client: "HPED Kotla",
          orderDate: "28 August 2023",
          type: "Work Order",
          currency: "INR",
          amount: "21,48,039",
        },
        {
          id: 7,
          name: "Government Tender",
          description:
            "Estimate for providing HP line for a proposed 63kVA substation at village Rappar, Garah, and 63kV transformer plantation.",
          client: "ED Indora Sec ESD Gangat",
          orderDate: "10 August 2023",
          type: "Work Order",
          currency: "INR",
          amount: "10,95,060",
        },
        {
          id: 8,
          name: "Government Tender",
          description:
            "Tender for supply, material erection, and testing of shifting an existing 100kVA transformer at Civil Hospital, Indora.",
          client: "Civil Hospital Indora",
          orderDate: "10 May 2022",
          type: "Work Order",
          currency: "INR",
          amount: "9,81,852",
        },
        {
          id: 9,
          name: "Government Tender",
          description:
            "Estimate for RR Work of LT Line damaged due to heavy rain at ED Indora.",
          client: "HESEB Indora",
          orderDate: "21 November 2024",
          type: "Work Order",
          currency: "INR",
          amount: "8,41,226",
        },
        {
          id: 10,
          name: "Residential Project",
          description: "Electrical and Plumbing",
          client: "Sh. Rajeev Bharadwaj (MP Kangra)",
          orderDate: "21 July 2023",
          type: "Work Order",
          currency: "INR",
          amount: "30,00,000",
        },
        {
          id: 11,
          name: "Government Tender",
          description:
            "Execution of looping tree branches, bushing ceiling, and clearing climbers from poles and wires along HT (138 km) and LT (201 km).",
          client: "HPSCD Fatehpur",
          orderDate: "19 September 2022",
          type: "Work Order",
          currency: "INR",
          amount: "10,86,129",
        },
        {
          id: 12,
          name: "Residential Project, Raja Ka Talab, Kangra",
          description: "MEP Work",
          client: "Mr. Shashipal Sharma",
          orderDate: "27 November 2024",
          type: "Work Order",
          currency: "INR",
          amount: "21,00,000",
        },
        {
          id: 13,
          name: "Commercial Hospitality Project, Sirmaur",
          description: "MEP Work, Construction",
          client: "Ms. Aastha Sharma",
          orderDate: "24 December 2024",
          type: "Work Order",
          currency: "INR",
          amount: "10,00,000",
        },
        {
          id: 14,
          name: "City Complex, Rajgarh",
          description: "MEP Work, Construction",
          client: "Sh. Satish Thakur",
          orderDate: "29 December 2024",
          type: "Work Order",
          currency: "INR",
          amount: "12,20,000",
        },
        {
          id: 15,
          name: "Government Tender",
          description:
            "Estimate for changing lengthy PVC to bare conductor along a 3 km line at Nagota Sunia.",
          client: "HPSEB Jawali",
          orderDate: "5 January 2025",
          type: "Work Order",
          currency: "INR",
          amount: "1,90,000",
        },
        {
          id: 16,
          name: "Residential Project",
          description: "Renovation of a double-story house in Makranhan.",
          client: "Sh. Ranveer Singh Manhas",
          orderDate: "6 August 2024",
          type: "Work Order",
          currency: "INR",
          amount: "10,00,000",
        },
      ];
  return (
    <div className="container mt-4">
    <h2 className="text-center bg-primary text-white my-5 p-3 rounded">
      List of Completed Projects
    </h2>
    <div className="table-responsive">
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Sl No</th>
            <th>Project Name</th>
            <th>Work Description</th>
            <th>Client</th>
            <th>Order Date</th>
            <th>Type</th>
            <th>Currency</th>
            <th>Order Amount</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.id}</td>
              <td>{project.name}</td>
              <td>{project.description}</td>
              <td>{project.client}</td>
              <td>{project.orderDate}</td>
              <td>{project.type}</td>
              <td>{project.currency}</td>
              <td>{project.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default CompletedProjects