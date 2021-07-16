import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

class Burger extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu right>
        <Link to="/" className="menu-item" id="home">
          {" "}
          Home
        </Link>
        <Link to="/form" className="menu-item" id="form">
          {" "}
          Form
        </Link>
        <Link to="/dashboard" className="menu-item" id="dashboard">
          {" "}
          Dashboard
        </Link>
        <Link to="/viewer" className="menu-item" id="viewer">
          {" "}
          Viewer
        </Link>
      </Menu>
    );
  }
}

export default Burger;
