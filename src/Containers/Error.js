import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section className="error-section">
      <div className="error-container">
        <h1 className="error-text">Oops! Page not found!</h1>
        <Link to="/" className="btn btn-primary">
          BACK HOME
        </Link>
      </div>
    </section>
  );
}