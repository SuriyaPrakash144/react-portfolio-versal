import React from "react";
import "./Header.css";
import sun from "./Images/sun.png";
import moon from "./Images/moon.png";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const Header = () => {
  const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
    const icon = document.getElementById('icon');
    if (document.body.classList.contains('dark-theme')) {
      icon.src = sun;
    } else {
      icon.src = moon;
    }
  };

  return (
    <nav>
      <span className="logo">PORTFOLIO</span>
      <label htmlFor="check" id="toggle">
        <i className="fa-solid fa-bars" id="menu"></i>
      </label>
      <input type="checkbox" name="check" id="check" />
      <ul className="ul">
        <li className="li">
          <a href="/home" className="link">Home</a>
        </li>
        <li className="li">
          <a href="/about" className="link">About</a>
        </li>
        <li className="li">
          <a href="/services" className="link">Features</a>
        </li>
        <li className="li">
          <a href="/projects" className="link">Projects</a>
        </li>
        {/* <li className="li">
          <a href="/skills" className="link">Project</a>
        </li> */}
        <li className="li">
          <a href="/contact" className="link">Contact</a>
        </li>
        {/* <img
          src={moon}
          alt="Dark Mode Toggle Icon"
          id="icon"
          onClick={toggleTheme}
        /> */}
      </ul>
    </nav>
  );
};

export default Header;
