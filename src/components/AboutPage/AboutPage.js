import React from 'react';
// import {BsFillPlayCircleFill} from 'react-icons/bs';
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/Footer';
import Profile from './thomasnguyen.jpg';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div>
      {/* <div className="about-section-container"> */}
      <NavigationBar />
      {/* <div className="about-background-image-container">
        <img src={} alt="" />
      </div> */}

      <h1 className="primary-heading-page">Thomas Nguyen</h1>
      <div className="aboutPage-section-image-container">
        <img id="thomasAboutPage" src={Profile} alt="" />
      </div>
      <div className="aboutPage-section-text-container">
        <p className="aboutPage-primary-text">
          Welcome to the first step to clear and healthy looking skin! My name
          is Thomas (32 years old) and I have been battling with adult acne for
          nearly 10 years. I would be insecure about going out in public and
          constantly looking in a mirror throughout the day, hoping it would
          magically get better. After a while I got tired of this insecurity of
          mine and decided to dedicate myself to curing this disorder. I have
          researched and tested dozens of products, spoke with skin
          professionals, altered my diet, literally everything you can think of.
          SPOILER ALERT, I finally recently discovered the potential key to
          winning this war against this annoying splinter in our lives! Now my
          friends, family and strangers would approach me complimenting me on my
          skin, which I couldn’t believe!
        </p>
        <p className="aboutPage-primary-text">
          Now here we are, I want to help you do the same and share my
          experience and help discover what your skin needs. Saving you the
          trouble of years of fighting acne, damaging your skin and wasting
          money on trying skin care products. Everyone is different and I
          believe listening to each other's story and having a real 1-on-1
          discussion is the best way to help you.
        </p>
        {/* <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          
        </div> */}
      </div>
      {/* </div> */}

      <Footer />
    </div>
  );
};

export default AboutPage;
