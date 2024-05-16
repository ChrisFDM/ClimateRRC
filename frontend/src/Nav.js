import React from "react";
import White from "../src/white.png";
import "./styles.css";

function Nav({ Toggle }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-full-height">
      <div className="container-fluid">
        <i
          className="navbar-brand bi bi-justify-left fs-4 nav-component"
          onClick={Toggle}
        ></i>
        <div className="d-flex justify-content-end">
          <img className="logo-image" src={White} alt="FDM Logo" />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
