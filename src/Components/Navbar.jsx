import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <>
    <nav className="navbar">
      <div className="logo">
        <h1>
          <span>Akash</span> Patil
        </h1>
      </div>
      <ul className="menu">
        <li className="active">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/works">Works</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </>
);

export default Navbar;
