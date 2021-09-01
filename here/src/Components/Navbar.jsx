import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const checkSize = () => {
    if (window.innerWidth >= 768) {
      setShowLinks(true);
    }
    if (window.innerWidth < 768) {
      setShowLinks(false);
    }
  };

  useEffect(() => {
    checkSize();
    window.addEventListener("resize", checkSize);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src="./images/logo.jpg" alt="Logo" className="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
          <GiHamburgerMenu />
          </button>
        
        </div>
        <div className={`links-container ${showLinks && "show"}`}>
          <ul className="links">

<<<<<<< HEAD
                  <li><a href="#">Home</a></li>
                  <li><a href="about">About Me</a></li>
                  <li><a href="services">Services</a></li>
                  <li><a href="contact">Contact Me</a></li>
=======
                  <li><a href="">Home</a></li>
                  <li><a href="#aboutSection">About Me</a></li>
                  <li><a href="#servicesSection">Services</a></li>
                  <li><a href="#contactSection">Contact Me</a></li>
>>>>>>> main

          </ul>
        </div>
        <ul className={`social-icons ${showLinks && "show"}`}>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
