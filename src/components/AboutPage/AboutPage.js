import React from 'react';
// import {BsFillPlayCircleFill} from 'react-icons/bs';
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/Footer';
import Profile from './thomasnguyen.jpg';
import CreamStock from './creamStock.jpg';
import {Link} from 'react-router-dom';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div>
      <NavigationBar />
      {/* <div className="about-background-image-container">
        <img src={} alt="" />
      </div> */}
      <div className="aboutPage-section-container">
        <h1 className="primary-heading-aboutPage">About Thomas Nguyen</h1>
        <div className="aboutPage-content-container">
          <div className="aboutPage-section-text-container1">
            <p className="aboutPage-primary-text">
              Welcome to the first step to clear and healthy looking skin! My
              name is Thomas (32 years old) and I have been battling with adult
              acne for nearly 10 years. I would be insecure about going out in
              public and constantly looking in a mirror throughout the day,
              hoping it would magically get better. After a while I got tired of
              this insecurity of mine and decided to dedicate myself to curing
              this disorder.{' '}
            </p>
            <p className="aboutPage-primary-text">
              I have researched and tested dozens of products, spoke with skin
              professionals, altered my diet, literally everything you can think
              of. SPOILER ALERT, I finally recently discovered the potential key
              to winning this war against this annoying splinter in our lives!
              Now my friends, family and strangers would approach me
              complimenting me on my skin, which I couldn’t believe!
            </p>
          </div>
          <div className="aboutPage-section-image-container3">
            <img id="creamImg" src={CreamStock} alt="" />
            <br />
            <br />
          </div>
          <div className="aboutPage-section-image-container2">
            <img id="thomasAboutPage" src={Profile} alt="" />
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="aboutPage-section-text-container4">
            <p className="aboutPage-primary-text">
              Now here we are, I want to help you do the same and share my
              experience and help discover what your skin needs. Saving you the
              trouble of years of fighting acne, damaging your skin and wasting
              money on trying skin care products. Everyone is different and I
              believe listening to each other's story and having a real 1-on-1
              discussion is the best way to help you.
            </p>
          </div>
        </div>
        <br />
        <br />
        <div className="aboutPage-secondary-button">
          <Link
            to="https://calendly.com/skinpactful/consultation"
            target="_blank"
            rel="noopener noreferrer">
            <button className="secondary-button">
              Schedule a Free Consultation
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
