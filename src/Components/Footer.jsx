import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="footer">
      <div className="contact">
        <span className="email">E: krantiakash5@gmail.com</span>
        <div className="phone">P: +91 7020701560</div>
      </div>
      {location.pathname === "/" && (
        <div className="intro">
          Hello, I’m <span>Akash Patil</span>, UX/UI Designer and <br />
          Front-end Developer Based in San Francisco.
        </div>
      )}

      <div className="social">
        <div className="title">Follow Me</div>
        <hr />
        <ul>
          <li>
            <a href=" ">
              <i className="bx bxl-instagram icon"></i>
            </a>
          </li>
          <li>
            <a href=" ">
              <i className="bx bxl-twitter icon"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
