import React from 'react';
import Profile from './thomasnguyen.jpg';
import {Link} from 'react-router-dom';
// import {BsFillPlayCircleFill} from 'react-icons/bs';

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        {/* <img src={} alt="" /> */}
      </div>
      <div className="about-section-image-container">
        <img id="thomasProfile" src={Profile} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About Me</p>
        <h1 className="primary-heading">Thomas Nguyen</h1>
        <p className="primary-text">
          My name is Thomas and I’m born and raised in Minnesota. I strive to
          take care of myself and always evolve in terms of my health. I like
          watching movies and grabbing drinks with friends. I’m always open to
          listening and giving a helping hand for those in need.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">
            <Link to="/about">Learn More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
