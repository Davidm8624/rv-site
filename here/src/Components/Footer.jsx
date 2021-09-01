import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter} from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <h3>Briggs RV Repair</h3>
      <ul className="socials">
        <li className="social">
        <a href="https://twitter.com/"><FaTwitter /></a>
        </li>
        <li className="social">
        <a href=""><FaFacebook /></a>
        </li>
        <li className="social">
        <a href=""><FaLinkedin /></a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
