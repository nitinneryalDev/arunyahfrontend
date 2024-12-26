import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="page-title not-found bg-dark aos-init position-relative aos-animate"
      data-aos="fade"
    >
      <div className="error-wrapper d-flex flex-column justify-content-center text-center h-100 text-white  py-5">
        <h1 className="error-code">404</h1>
        <h2 className="error-message">Oops! Page Not Found</h2>
        <p className="error-description">
          The page you’re looking for might have been removed, renamed, or is
          temporarily unavailable.
        </p>
        <Link to="/" className="back-home-btn">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
