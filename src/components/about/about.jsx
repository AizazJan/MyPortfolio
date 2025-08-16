import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="About">
      <div className="background">
        <div className="heading">
          # About me
          <div className="line"></div>
        </div>
        <div className="contentDiv">
          <div className="aboutContent">
            I'm <span className="CreatorName">Muhammad Aizaz Tahir</span>, a passionate Frontend Engineer with expertise in creating dynamic, user-centric web
 applications. Skilled in HTML, CSS, JavaScript, and modern frameworks like React , I focus
 on building responsive, fast, and accessible interfaces that provide seamless experiences
 across all devices. I thrive on turning design concepts into functional, engaging solutions
 while constantly improving my skills and staying up-to-date with the latest industry
 trends
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
