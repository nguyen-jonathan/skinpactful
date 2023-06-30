import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/Footer';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks';
import ContactImg from './bottleStock.jpeg';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div>
      <NavigationBar />
      <div className="contactPage-section-text-container">
        <h1 className="primary-heading-contact">Contact us</h1>
        <br />
        <p className="contactPage-text">skinpactfulcoaching@gmail.com</p>
        <br />
        <h2>Find us at our social media outlets</h2>
      </div>
      <SocialMediaLinks />
      <br />
      <br />
      <div className="contactPage-image-section">
        <img src={ContactImg} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
