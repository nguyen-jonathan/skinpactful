import React from 'react';
import Profile from './thomas.jpg';
// import {BsFillPlayCircleFill} from 'react-icons/bs';

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        {/* <img src={} alt="" /> */}
      </div>
      <div className="about-section-image-container">
        <img src={Profile} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About Me</p>
        <h1 className="primary-heading">Thomas Nguyen</h1>
        <p className="primary-text">
          Smaller description about you. I could use what you send me but you
          decide. The learn more button will take you to another ABOUT YOU page
          which this can be a long page.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          {/* <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default About;
