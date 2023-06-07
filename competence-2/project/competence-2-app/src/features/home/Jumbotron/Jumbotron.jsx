import React from "react";

import "./Jumbotron.css";

const Jumbotron = () => {
  return (
    <section className="bgImg">
      <div className="container h-100 d-flex flex-column justify-content-center align-items-center text-light">
        <h1 className="text-uppercase">welcome to our website</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <button type="button" className="btn btn-primary fw-semibold">
          Get started
        </button>
      </div>
    </section>
  );
};

export default Jumbotron;
