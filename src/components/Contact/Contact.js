import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/Footer';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <NavigationBar />
      {/* <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1> */}
      <h1>Email: skinpactfulcoaching@gmail.com</h1>
      <h1 className="primary-heading">
        <InstagramIcon />
        Instagram
      </h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <button className="secondary-button">Submit</button>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
