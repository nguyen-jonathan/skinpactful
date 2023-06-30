import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/Footer';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <NavigationBar />
      <div className="contactPage-section-text-container">
        <h1 className="primary-heading-contact">Contact us</h1>
        <br />
        <p>skinpactfulcoaching@gmail.com</p>
        <br />
        <h2>Find us at our social media outlets</h2>
      </div>
      <SocialMediaLinks />

      <Footer />
    </div>
  );
};

export default Contact;
