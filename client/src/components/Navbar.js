import "./NavbarStyles.css"
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import usa from "../assets/usa.png";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }

    };
    window.addEventListener("scroll", changeColor);

    return (
        <nav className={color ? "navbar navbar-bg" : "navbar"}>
          <Link to="/" className="navbar-brand">
            <div id="title-names"> <div id="usa-img">
            <img src={usa} alt="IntroImg" width="110%" height="95" />
          </div></div>
            
          </Link>
          <ul className={click ? "navbar-nav active" : "navbar-nav"}>
            <li className="nav-item">
              <Link to="/" onClick={() => setClick(!click)} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Expertise" onClick={() => setClick(!click)} className="nav-link">
                Expertise
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" onClick={() => setClick(!click)} className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact" onClick={() => setClick(!click)} className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/DashRoute" onClick={() => setClick(!click)} className="nav-link">
                Dashboard
              </Link>
            </li>
          </ul>
          <button className="navbar-toggler" onClick={handleClick}>
            {click ? (
              <FaTimes size={20} style={{ color: "#000000" }} />
            ) : (
              <FaBars size={20} style={{ color: "#000000" }} />
            )}
          </button>
        </nav>
      );
    };
    
    export default Navbar;

    