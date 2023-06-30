import React from 'react';
import lotionStock from './lotionStock.jpeg';
import {Link} from 'react-router-dom';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <div className="contact-section-text-container">
        <img src={lotionStock} alt="" />
        <br />
        <Link
          to="https://calendly.com/skinpactful/consultation"
          target="_blank"
          rel="noopener noreferrer">
          <button className="secondary-button">
            Schedule a Free Consultation
          </button>
        </Link>
        <br />
        <h2>Find us at our social media outlets</h2>
      </div>
      <SocialMediaLinks />
    </div>
  );
};

export default Contact;
