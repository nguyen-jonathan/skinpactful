import React from 'react';
// import './HomePage.css';
// import NavigationBar from '../NavigationBar/NavigationBar';

const HomePage = () => {
  return (
    <div className="home-container">
      {/* <NavigationBar /> */}
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          {/* <img src={BannerBackground} alt="" /> */}
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">Motto to add here</h1>
          <p className="primary-text">
            give me description what you Skinpactful and this service is about
          </p>
          <button className="secondary-button">
            Schedule a Free Consultation
          </button>
        </div>
        <div className="home-image-section">
          {/* <img src={BannerImage} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
