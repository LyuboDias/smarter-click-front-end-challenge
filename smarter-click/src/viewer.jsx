import React from "react";
import img from "./img.png";

function Viewer() {
  return (
    <div className="viewer">
      <img src={img} alt="img" />
    </div>
  );
}

export default Viewer;
