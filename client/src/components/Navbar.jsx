import React from "react";
import "./Navbar.css";

import logo from "../assets/pretva-logo.png";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <img src={logo} alt="" />
      </div>

      <ul className="navbar__middle">
        <li>About</li>
        <li>Services</li>
        <li className="selected">Search</li>
        <li>Feedback&nbsp;&amp;&nbsp;Support</li>
      </ul>

      <ul className="navbar__right">
        <li className="border">My&nbsp;Account</li>
        <li className="background">Logout</li>
      </ul>
    </nav>
  );
}

export default Navbar;
