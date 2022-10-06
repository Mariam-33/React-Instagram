import React from "react";
import "../assets/stylesheets/error.css";
const Error = ({ error }) => {
  return (
    <>
      <div className="container ">
        <div className="holder">
          <div className="error">
            <h1>Error Requesting page</h1>
          </div>
          <div className="error-body">
            <h2>{error}</h2>
            <h3>Please try later</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
