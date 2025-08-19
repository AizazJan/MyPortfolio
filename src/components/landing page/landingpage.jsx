import React from "react";
import "./landingpage.css";
import Profile from "../../assets/Skills/Profile.png";
import { ReactTyped } from "react-typed"; // ✅ only import here

const LandingPage = () => {
  return (
    <div className="landingpage">
      <div className="container">
        <div className="glass">
          <div className="content">
            <br />
            <ReactTyped
              strings={[
                "MernStack Developer",
                "Web developer",
                "Front-end Developer",
                "Software Developer",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
            <div className="containerButton">
              <div className="ButtonCV">
                <a
                  href="https://drive.google.com/file/d/13lXBaNo5snQl-IqZ3WHJNxiWr07E508w/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ButtonCV"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>

          <div className="contentprofile">
            <img className="profile" src={Profile} alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
