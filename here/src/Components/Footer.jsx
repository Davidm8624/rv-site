import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <h3>Briggs RV Repair</h3>
      <ul className="socials">
        <li className="social">
          <a href="https://twitter.com/">
            <FaTwitter />
          </a>
        </li>
        <li className="social">
          <a href="https://facebook.com/">
            <FaFacebook />
          </a>
        </li>
        <li className="social">
          <a href="https://www.linkedin.com/in/chauncey-briggs-01b28375/">
            <FaLinkedin />
          </a>
        </li>
      </ul>
      <p>Company Address: 24710 W Dove Trail, Buckeye, AZ 85326</p>
      <p>Company Number: (623) 474-5069 </p>
      <p><a href="http://www.briggsairconditioning.com/" className="other-website">www.briggsairconditioning.com</a></p>
      <hr/>
    </footer>
  );
};

export default Footer;
