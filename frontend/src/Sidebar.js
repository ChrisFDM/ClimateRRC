/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";

function Sidebar() {
  return (
    <div className="bg-white sidebar p-2">
      <div className="m-2">
        <i className="bi bi-bootstrap-fill me-3 fs-4"></i>
        <span className="brand-name fs-4">FDM</span>
      </div>
      <hr className="text-dark" />
      <div className="list-group list-group-flush">
        <a href="#" className="list-group-item py-2">
          <i className="bi bi-speedometer2 fs-5 me-3"></i>
          <span>Dashboard</span>
        </a>
        <a href="#" className="list-group-item py-2">
          <i className="bi bi-house fs-5 me-3"></i>
          <span>Home</span>
        </a>
        <a href="#" className="list-group-item py-2">
          <i className="bi bi-exclamation-octagon fs-5 me-3"></i>
          <span>Risk</span>
        </a>
        <a href="#" className="list-group-item py-2">
          <i className="bi bi-clipboard-check fs-5 me-3"></i>
          <span>Regulation</span>
        </a>
        <a href="#" className="list-group-item py-2">
          <i className="bi bi-shield-check fs-5 me-3"></i>
          <span>Compliance</span>
        </a>

        <a href="#" className="list-group-item py-2">
          <i className="bi bi-clipboard-data fs-5 me-3"></i>
          <span>Sustainability</span>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
