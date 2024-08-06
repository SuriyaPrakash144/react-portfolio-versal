import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";

import sun from "./Images/sun.png";
import moon from "./Images/moon.png";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function Header()
{
  let val=true;

  function x()
  {
    return <span>Hi</span>
  }



  return (
    <nav>
     
      {((val==true)?<span className="logo">PORTFOLIO</span>:<span className="logo">SURIYA PRAKASH</span>)}
      {/* <span className="logo">{x()}</span> */}
      {/* <span className="logo">PORTFOLIO</span> */}
      <label htmlFor="check" id="toggle">
        <i className="fa-solid fa-bars" id="menu"></i>
      </label>
      <input type="checkbox" name="check" id="check" />
      <ul className="ul">
        <li className="li">
          <Link to="/home" className="link">Home</Link>
        </li>
        <li className="li">
          <Link to="/about" className="link">About</Link>
        </li>
        <li className="li">
          <Link to="/services" className="link">Features</Link>
        </li>
        <li className="li">
          <Link to="/projects" className="link">Projects</Link>
        </li>
        <li className="li">
          <Link to="/skills" className="link">Skills</Link>
        </li>
        {/* <li className="li">
          <a href="/blog" className="link">Blog</a>
        </li> */}
        <li className="li">
          <Link to="/contact" className="link">Contact</Link>
        </li>
        {/* <li className="li">
          <a href="/cart" className="link">Cart</a>
        </li> */}
        {/* <li className="li">
          <a href="/forms" className="link">Login</a>
        </li> */}
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
