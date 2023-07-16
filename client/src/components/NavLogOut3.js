import "./NavLogOut3Styles.css"
import React, { useState } from 'react'

import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import { AiOutlineLogout } from "react-icons/ai";
const Nav3 = () => {
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

    
    const handleLogout = () => {
        // remove the token from local storage or wherever you are storing it
        localStorage.removeItem('token');
        // update the parent component's state to reflect that the user is no longer logged in
        window.location.reload();
      };

    return (
        <div className={color ? "header header-bg" : "header"}>
        
            
            <li>
            
     <Link  to="/DashRoute" onClick={handleLogout} className="logout">LogOut
        <AiOutlineLogout className="logout-hover" size={40} style={{ marginRight: "1rem" }}/>
        </Link>

                </li>
            
            <div className="hamburger" onClick={handleClick}>
                {click ? (
                    <FaTimes size={20} style={{ color: "#fff" }} />
                ) : (
                    <FaBars size={20} style={{ color: "#fff" }} />
                )}
            </div>
        </div>
    );
};

export default Nav3;