import React from 'react';
import {BsFillPlayCircleFill} from 'react-icons/bs';

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        {/* <img src={} alt="" /> */}
      </div>
      <div className="about-section-image-container">
        {/* <img src={} alt="" /> */}
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About Me</p>
        <h1 className="primary-heading">Thomas Nguyen</h1>
        <p className="primary-text">
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
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
