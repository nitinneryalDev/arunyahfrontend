import React from "react";

function SafetyPolicies() {
  return (
    <div className="bg-secondary py-2 py-sm-5 ">
      {" "}
      <div className=" container  py-5">
        {/* Safety Policy Header */}
        <div className="text-center mb-4">
          <h1 className="fw-bold">
            <span className="bg-warning text-primary px-3 py-2 rounded-pill shadow">
              Safety <span className="text-dark">Policy</span>
            </span>
          </h1>
        </div>

        {/* Policy Description */}
        <p className="text-center py-3 text-light">
          At Arunyah Constructions, we firmly believe that the safety of our
          employees and all stakeholders associated with our project sites and
          manufacturing facilities is of utmost importance. Safety is an
          essential and integral part of all our work activities, encompassing
          planning, design, procurement, fabrication, construction,
          installation, and commissioning of facilities, products, manufacturing
          processes, and services. We are committed to preventing incidents,
          accidents, and health risks through the active involvement of all
          stakeholders, thereby creating a safe and accident-free workplace.
        </p>

        {/* Safety Commitments Section */}
        <div className="text-center my-4">
          <button className="btn btn-primary px-4 py-2 rounded-pill fw-bold shadow">
            Safety Commitments
          </button>
        </div>

        {/* Safety Commitments List */}
        <div className="text-start">
          <p className="fw-bold text-primary">
            To create a safe workplace, Arunyah Constructions shall:
          </p>
          <ul className="list-unstyled  text-light">
            <li>
              <strong>1.</strong> Ensure compliance with all relevant statutory
              and other safety provisions.
            </li>
            <li>
              <strong>2.</strong> Promote safety awareness through campaigns and
              training programs among employees, business associates, and
              clients, ensuring adherence to safety rules, systems, and
              practices.
            </li>
            <li>
              <strong>3.</strong> Provide adequate resources to fully implement
              our Safety Policy.
            </li>
          </ul>
        </div>
        <div className="container p-2 p-sm-5 m-0 m-sm-5">
          <p className="mt-3 text-start text-light  ">
            <i className=" fw-bold bi bi-chevron-double-right"></i> To ensure
            safety while at work, Arunyan Constructions has identified Essential
            Safety Practices (ESPs) based on experience. These must be followed
            strictly and without exception in each of our operational verticals,
            particularly in Manufacturing and Project Management, which are the
            fields most prone to accidents. The ESPs address inherent safety
            hazards in each vertical, thereby increasing safety levels.
          </p>

          <div className="text-center my-5">
            <button className="btn btn-primary px-4 py-2  rounded-pill fw-bold shadow">
              Safety Implementation
            </button>
          </div>

          <h5 className="mt-4 text-light text-center fw-bold">
            ESPs in Project Management:
          </h5>

          <div className="container text-center">
            <div className="container mt-5 overflow-hidden text-center">
              <div className="row   gy-5">
                <div className="col-12 col-sm-6">
                  <div className="text-start">
                    <ul className="list-unstyled  text-light">
                      <li>
                        <strong>1.</strong>Issue and use of Personal Protective
                        Equipment (PPE)
                      </li>
                      <li>
                        <strong>2.</strong>Electrical work safety
                      </li>
                      <li>
                        <strong>3.</strong> Material handling and manual lifting
                      </li>
                      <li>
                        <strong>4.</strong> Safe use of ladders, scaffolds, and
                        work platforms
                      </li>
                      <li>
                        <strong>5.</strong> Working at heights and fall
                        protection
                      </li>
                      <li>
                        <strong>6.</strong> Sheet metal work safety
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="text-start">
                    <ul className="list-unstyled  text-light">
                      <li>
                        <strong>1.</strong> Handling compressed gas cylinders.
                      </li>
                      <li>
                        <strong>2.</strong>Gas cutting and arc welding safety.
                      </li>
                      <li>
                        <strong>3.</strong>Mobile crane safety.
                      </li>
                      <li>
                        <strong>4.</strong>Proper storage, stacking, and
                        carrying of materials.
                      </li>
                      <li>
                        <strong>5.</strong>Barricading work areas.
                      </li>
                      <li>
                        <strong>6.</strong>Fire-fighting preparedness.
                      </li>
                      <li>
                        <strong>7.</strong>First aid readiness .
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <p className=" text-start text-light  ">
            <i className=" fw-bold bi bi-chevron-double-right"></i> Safety at
            Arunyah Constructions is managed through engineering and
            administrative controls, as well as ongoing safety education and
            audits. By implementing these measures, Arunyah Constructions is
            dedicated to ensuring a safe and healthy environment for all
            stakeholders.
          </p>
          <div className="p-3  row align-items-stretch ">
            {/* Electrical Contracting */}
            <div className="col-md-6 mb-3 d-flex ">
              <div className="p-4 bg-primary text-white rounded shadow d-flex flex-column h-100 ">
                <h5 className="fw-bold">Engineering Controls</h5>
                <ul className="list-unstyled  text-light">
                  <li>
                    <strong>1.</strong> Physical Barriers: Barricades and
                    guardrails around work areas.
                  </li>
                  <li>
                    <strong>2.</strong> Machine Safety: Machine guards, limit
                    switches, and locking devices.
                  </li>
                  <li>
                    <strong>3.</strong>Excavation Supports: Structural supports
                    for excavations.
                  </li>
                  <li>
                    <strong>4.</strong>Electrical Safety: ELCBs and circuit
                    breakers for electrical work.
                  </li>
                  <li>
                    <strong>5.</strong>Traffic Management: Marking of traffic
                    lanes and diversions around work zones.
                  </li>
                </ul>
              </div>
            </div>

            {/* Plumbing & Fire Fighting */}
            <div className="col-md-6 mb-3 d-flex ">
              <div className="p-4 bg-light-subtle text-secondary rounded shadow d-flex flex-column h-100">
                <h5 className="fw-bold">Administrative Controls</h5>
                <div className="m-0 flex-grow-1">
                  <ul className="list-unstyled  ">
                    <li>
                      <strong>1.</strong>Restricted Access: Limiting entry to
                      activity zones
                    </li>
                    <li>
                      <strong>2.</strong> PPE Compliance: Mandatory use of
                      Personal Protective Equipment.
                    </li>
                    <li>
                      <strong>3.</strong>Prohibitions: No mobile phone use
                      during work and no entry under the influence of
                      intoxicants.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 my-3 d-flex">
              <div className="p-4 bg-light text-secondary rounded shadow d-flex flex-column h-100">
                <h5 className="fw-bold">Ongoing Safety Practices</h5>
                <div className="m-0 flex-grow-1">
                  <ul className="list-unstyled  ">
                    <li>
                      <strong>1.</strong>Training: Regular sessions on statutory
                      regulations, systems, and processes.
                    </li>
                    <li>
                      <strong>2.</strong>Audits: Internal safety checks by
                      managers and external audits by accredited agencies.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="d-flex justify-content-between align-items-center  border-top pt-3"></div>
      </div>
      <div className="container py-2 py-sm-5">
        <div className="text-center mb-4">
          <h1 className="fw-bold">
            <span className="bg-warning text-primary px-3 py-2 rounded-pill shadow">
              Quality <span className="text-dark">Policy</span>
            </span>
          </h1>
        </div>

        {/* Description */}
        <p className="text-center text-light py-3 fw-semibold">
          At <span className="fw-bold ">Arunyah Constructions</span>, we are
          committed to achieving and maintaining the highest standards of
          quality in all our operations. Our Quality Policy is rooted in our
          dedication to continuous improvement, customer satisfaction, and
          operational excellence.
        </p>

        {/* Safety Commitments Section */}
        <div className="text-center mb-3">
          <button className="btn btn-primary  px-4 py-2 rounded-pill fw-bold shadow">
            Commitments to Quality{" "}
          </button>
        </div>

        {/* Quality Points */}
        <div className="mt-4 text-light">
          {/* Customer Focus */}
          <div className="mb-3">
            <h5 className="fw-bold text-primary">
              <i className="bi bi-chevron-right text-primary"></i> Customer
              Focus:
            </h5>
            <ul className="ps-4">
              <li>
                Understand and meet the specific needs and expectations of our
                customers.
              </li>
              <li>
                Ensure timely delivery of products and services without
                compromising on quality.
              </li>
            </ul>
          </div>

          {/* Continuous Improvement */}
          <div className="mb-3">
            <h5 className="fw-bold text-primary">
              <i className="bi bi-chevron-right text-primary"></i> Continuous
              Improvement:
            </h5>
            <ul className="ps-4">
              <li>
                Foster a culture of continuous improvement across all levels of
                the organization.
              </li>
              <li>
                Regularly review and enhance our processes, systems, and
                technologies to improve efficiency and effectiveness.
              </li>
            </ul>
          </div>

          {/* Employee Involvement */}
          <div className="mb-3">
            <h5 className="fw-bold text-primary">
              <i className="bi bi-chevron-right text-primary"></i> Employee
              Involvement:
            </h5>
            <ul className="ps-4">
              <li>
                Engage and empower our employees to take ownership of quality in
                their respective roles.
              </li>
              <li>
                Provide ongoing training and development to enhance skills and
                knowledge related to quality management.
              </li>
            </ul>
          </div>
        </div>


      </div>
    </div>
  );
}

export default SafetyPolicies;
