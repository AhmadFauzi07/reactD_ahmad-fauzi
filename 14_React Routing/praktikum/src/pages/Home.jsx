import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import "../styles/style.css";

const Home = () => {
  return (
    <div className="body-styled">
      <h1 className="body-styled">HOME</h1>
      <div className="body-css">TODOS</div>
      <div className="body-styled">
        <input type="text"></input>
      </div>
    </div>
  );
};

export default Home;
