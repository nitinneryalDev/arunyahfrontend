import React from "react";
import { Link } from "react-router-dom";

function CommonHero({ title, description , clsnm  }) {
  return (
    <div
      className="page-title aos-init position-relative aos-animate"
      data-aos="fade"
    >
      <div className={`${clsnm} text-center h-50 text-white py-5`}>
        <h1>{title}</h1>
        {description && <p>{description}</p>} {/* Render description only if it exists */}
        <nav className="breadcrumbs d-inline-block">
          <ol className="breadcrumb bg-transparent p-0 m-0">
            <li className="breadcrumb-item">
              <Link to="/" className="text-white text-decoration-none">
                Home
              </Link>
            </li>
            <li
              className="breadcrumb-item active text-white"
              aria-current="page"
            >
              {title}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}

export default CommonHero;
