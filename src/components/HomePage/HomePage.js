import React from 'react';
import HomeBG from './wash-face.jpeg';
import {Link} from 'react-router-dom';
// import './HomePage.css';
// import NavigationBar from '../NavigationBar/NavigationBar';

const HomePage = () => {
  return (
    <div className="home-container">
      {/* <NavigationBar /> */}
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          {/* <img src={HomeBG} alt="" /> */}
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">Motto to add here</h1>
          <p className="primary-text">
            give me description what you Skinpactful and this service is about
          </p>
          <Link
            to="https://calendly.com/inaniwin/30min"
            target="_blank"
            rel="noopener noreferrer">
            <button className="secondary-button">
              Schedule a Free Consultation
            </button>
          </Link>
        </div>
        <div className="home-image-section">
          <img src={HomeBG} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
