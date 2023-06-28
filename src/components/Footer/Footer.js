import React from 'react';
import Logo from './skinpactful_logo2_white.png';
import './Footer.css';
// import { BsTwitter } from "react-icons/bs";
// import { SiLinkedin } from "react-icons/si";
// import { BsYoutube } from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img id="logo2" src={Logo} alt="" />
        </div>
        {/* <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div> */}
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <p>
            <b>Medical Disclaimer:</b> The information provided is not intended
            to replace medical advice. I am not a Medical Provider (Physician,
            Psychiatrist, Nurse Practitioner, etc.). You agree and acknowledge
            that I am not providing health care, medical or nutritional therapy
            services, or attempting to diagnose, treat, prevent or cure any
            physical, mental or emotional issue, disease or condition.
          </p>{' '}
          <br />
          <p>
            Always seek the advice of your own Medical Provider and/or Mental
            Health Provider regarding any questions or concerns you have about
            your specific health or any medications, herbs or supplements you
            are currently taking and before implementing any recommendations or
            suggestions from our services.
          </p>
        </div>
        {/* <div className="footer-section-columns">
          <span>244-5333-7783</span>
          <span>hello@food.com</span>
          <span>press@food.com</span>
          <span>contact@food.com</span>
        </div> */}
        {/* <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
