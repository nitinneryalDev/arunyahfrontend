import React from "react";
import electricalImage from "../../assets/images/construction/electrician.jpg";

function MEPservices() {
  return (
    <section className="container py-2 py-md-5">
      <div className="row py-5 align-items-center">
        {/* Left Side - Image */}
        <div className="col-md-5 mb-4 mb-md-0">
          <img
            src={electricalImage}
            alt="Electrical Work"
            className="img-fluid rounded"
          />
        </div>

        {/* Right Side - Content */}
        <div className="col-md-7">
          <h2 className="text-primary fw-bold">
            Integrated MEP <span className="text-dark">Services</span>
          </h2>
          <p className="text-secondary">
            Arunyah Constructions provides a full spectrum of integrated MEP
            services, leveraging cutting-edge technology and industry best
            practices.
          </p>

          {/* Service Cards */}
          <div className="row align-items-stretch">
            {/* Electrical Contracting */}
            <div className="col-md-6 mb-3 d-flex">
              <div className="p-4 bg-primary text-white rounded shadow d-flex flex-column h-100">
                <h5 className="fw-bold">Electrical Contracting Projects</h5>
                <p className="m-0 flex-grow-1">
                  We specialize in designing, installing, and executing
                  electrical systems, including power distribution, backup
                  systems, and automation, ensuring energy efficiency and
                  reliability.
                </p>
              </div>
            </div>

            {/* Plumbing & Fire Fighting */}
            <div className="col-md-6 mb-3 d-flex">
              <div className="p-4 bg-secondary text-white rounded shadow d-flex flex-column h-100">
                <h5 className="fw-bold">Plumbing and Fire Fighting Systems</h5>
                <p className="m-0 flex-grow-1">
                  Our team designs and implements advanced plumbing and
                  fire-fighting systems, using high-quality materials and modern
                  techniques for safety and performance.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-3 d-flex">
              <div className="p-4 bg-secondary text-white rounded shadow d-flex flex-column h-100">
                <h5 className="fw-bold">Energy Solutions</h5>
                <p className="m-0 flex-grow-1">
                We provide tailored energy
solutions, including energy
audits, system optimization,
and integration of renewable
energy sources like solar
power, to help clients achieve
significant energy savings,
reduce operational costs, and
enhance sustainability.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-3 d-flex">
              <div className="p-4 bg-primary text-white rounded shadow d-flex flex-column h-100">
                <h5 className="fw-bold">Plumbing and Fire Fighting Systems</h5>
                <p className="m-0 flex-grow-1">
                We offer state-of-the-art
lighting design and installation,
utilizing smart controls and
energy-efficient technologies
to improve lighting quality,
reduce energy consumption,
and enhance both functionality
and aesthetics of spaces.

                </p>
              </div>
            </div>
            <div className="col-md-6 mb-3 d-flex">
              <div className="p-4 bg-primary text-white rounded shadow d-flex flex-column h-100">
                <h5 className="fw-bold">Energy Solutions</h5>
                <p className="m-0 flex-grow-1">
                We provide tailored energy
solutions, including energy
audits, system optimization,
and integration of renewable
energy sources like solar
power, to help clients achieve
significant energy savings,
reduce operational costs, and
enhance sustainability.


                </p>
              </div>
            </div>
            <div className="col-md-6 mb-3 d-flex">
              <div className="p-4 bg-secondary text-white rounded shadow d-flex flex-column h-100">
                <h5 className="fw-bold">Lightening Solutions</h5>
                <p className="m-0 flex-grow-1">
                We offer state-of-the-art
lighting design and installation,
utilizing smart controls and
energy-efficient technologies
to improve lighting quality,
reduce energy consumption,
and enhance both functionality
and aesthetics of spaces.

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MEPservices;
