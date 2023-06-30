import React from 'react';
import HomeBG from './wash-face.jpeg';
import {Link} from 'react-router-dom';
import './HomePage.css';
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
          <h1 className="home-primary-heading">Virtual 1-on-1 Sessions</h1>
          <p className="primary-text">
            Someone who’s done and seen it all, from cystic to hormonal acne.
            Through virtual sessions in the comfort of your own home, we can
            discover what exactly your unique skin needs. Everyone is different,
            each session will be personal and specific for each individual.
            <br />
            <br />
            <h2>Free Consultation</h2>
            <br />
            <br /> Offering a FREE 15 minute consultation to see if this program
            is for you, if we want to move forward, we can schedule a 1 hour
            session and begin this impactful journey! <br />
            <br />
            <h3>Don’t let bad skin negatively impact your life.</h3>
          </p>
          <Link
            to="https://calendly.com/skinpactful/consultation"
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
