import React from 'react';
import Logo from './skinpactful_logo2_white.png';
import {Link} from 'react-router-dom';
import './Footer.css';
// import { BsTwitter } from "react-icons/bs";
// import { SiLinkedin } from "react-icons/si";
// import { BsYoutube } from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-logo-container">
        <img id="logo2" src={Logo} alt="" />
      </div>
      {/* <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div> */}

      <div className="footer-section-two">
        {/* <div className="footer-section-columns">
          <span>244-5333-7783</span>
          <span>hello@food.com</span>
          <span>press@food.com</span>
          <span>contact@food.com</span>
        </div> */}
        <div className="footer-section-columns">
          <span>
            <Link to="/about" className="noUnderline">
              About
            </Link>
          </span>
          <span>
            <Link to="/contact" className="noUnderline">
              Contact
            </Link>
          </span>
          <span>
            <Link to="/terms-conditions" className="noUnderline">
              Terms & Conditions
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
