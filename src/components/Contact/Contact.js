import React from 'react';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <div className="contactPage-section-text-container">
        <h1 className="primary-heading-contact">Contact us</h1>
        <br />
        <p>skinpactfulcoaching@gmail.com</p>
        <br />
        <h2>Find us at our social media outlets</h2>
      </div>
      <SocialMediaLinks />
    </div>
  );
};

export default Contact;
