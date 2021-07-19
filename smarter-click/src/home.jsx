import React from "react";
import logo from "./logo.png";

function Home() {
  return (
    <div className="logo-wrap">
      <div className="logo-div">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <svg class="arrow">
          <path class="a1" d="M0 0 L30 22 L60 0"></path>
          <path class="a2" d="M0 20 L30 42 L60 20"></path>
          <path class="a3" d="M0 40 L30 62 L60 40"></path>
        </svg>
      </div>
    </div>
  );
}

export default Home;
