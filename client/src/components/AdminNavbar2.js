import "./AdminNavbar2Styles.css"
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { FaHome,FaBars, FaTimes } from "react-icons/fa"
const Navbar2 = () => {
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
        <div className={color ? "header-1 header-bg-1" : "header-1"}>
        
            <Link to="/">
                <h1 className ="Htag-1"> 
                 <FaHome size={35} style={{ color: "black", marginRight: "1rem" }} /> 
                 Technoid 
                 </h1>
               
            </Link>
            


            
            <div className="hamburger-1" onClick={handleClick}>
                {click ? (
                    <FaTimes size={20} style={{ color: "#fff" }} />
                ) : (
                    <FaBars size={20} style={{ color: "#fff" }} />
                )}
            </div>
        </div>
    );
};

export default Navbar2

