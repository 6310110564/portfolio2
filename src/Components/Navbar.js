import React from "react";
import {FaBars, FaTimes} from "react-icons/fa"
import { useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import "../styles/Navbar.css";
import { Link } from "react-router-dom";

import './Navbar.css';



function Navbar(){
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

	return (
        <header>
            <div className="nav-r">
                <h3>PORTFOLIO</h3>
            </div>
		<nav ref={navRef}>
             

            <ul className="nav-l" id="js-menu">
                <Link to="/" onClick={showNavbar}>Home</Link>
				<Link to="/about" onClick={showNavbar}>About me</Link>
				<Link to="/education" onClick={showNavbar}>Education</Link>
				<Link to="/skills" onClick={showNavbar}>Skills</Link>
				<Link to="/contact" onClick={showNavbar}>Contact</Link>
            </ul>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaTimes/>
            </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
            <FaBars/>
        </button>
        </header>
	);
}

export default Navbar;