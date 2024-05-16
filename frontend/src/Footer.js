import React, { useState } from "react";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState("");

  const iconStyle = { color: "currentColor", transition: "color 0.2s" };

  const hoveredStyle = { color: "#007bff", transition: "color 0.2s" };

  return (
    <div className="container footer-container fixed-bottom">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-5 mb-1 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="text-muted">© 2024 FDM Group</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a
              className="text-muted"
              href="https://twitter.com/FDMGroup"
              aria-label="Twitter"
              onMouseEnter={() => setHoveredIcon("twitter")}
              onMouseLeave={() => setHoveredIcon("")}
            >
              <FaTwitter
                style={hoveredIcon === "twitter" ? hoveredStyle : iconStyle}
              />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-muted"
              href="https://www.instagram.com/fdm_group/"
              aria-label="Instagram"
              onMouseEnter={() => setHoveredIcon("instagram")}
              onMouseLeave={() => setHoveredIcon("")}
            >
              <FaInstagram
                style={hoveredIcon === "instagram" ? hoveredStyle : iconStyle}
              />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-muted"
              href="https://www.facebook.com/FDMGroup/"
              aria-label="Facebook"
              onMouseEnter={() => setHoveredIcon("facebook")}
              onMouseLeave={() => setHoveredIcon("")}
            >
              <FaFacebookF
                style={hoveredIcon === "facebook" ? hoveredStyle : iconStyle}
              />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
