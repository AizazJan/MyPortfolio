import React, { useState, useEffect } from "react";
import "./contact.css";
import linkedinLogo from "../../assets/Contact/linkedin.png";
import mailLogo from "../../assets/Contact/mail.png";
import githubLogo from "../../assets/Contact/github.png";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="Contact">
      <div className="background">
        <div className="heading">
          # Contact me
          <div className="line"></div>
        </div>

        <div className="ParentDiv">
          <div className="ContactDiv">
            <div className="Content">
              I'm interested in freelance opportunities. However, if you have
              other request or question, don't hesitate to contact me
            </div>

            <div className="ContactDetails">
              <div>Message me Here</div>

              <div>
                <img
                  className="iconsForContact"
                  src={mailLogo}
                  alt="LinkedIn"
                />
                <a href="mailto:aizaz.janjj@gmail.com">
                  aizaz.janjj@gmail.com
                </a>
              </div>
              <div>
                <img
                  className="iconsForContact"
                  src={githubLogo}
                  alt="LinkedIn"
                />
                <a
                  href="https://github.com/AizazJan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AizazJan
                </a>
              </div>
              <div>
                <img
                  className="iconsForContact"
                  src={linkedinLogo}
                  alt="LinkedIn"
                />
                <a
                  href="https://www.linkedin.com/in/muhammad-aizaz-tahir-101669262"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  muhammad-aizaz-tahir-101669262
                </a>
              </div>
            </div>
          </div>
          <div className="Footer">
            <span>⨇</span>
            <div
              className="BackTop"
              style={{ display: isVisible ? "block" : "none" }}
              onClick={scrollToTop}
            >
              BACK TO TOP
            </div>
            <div className="SocialMedia" aria-label="Social media links">
              <a
                href="mailto:aizaz.janjj@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="iconsForContact"
                  src={mailLogo}
                  alt="LinkedIn"
                />
              </a>
              <a
                href="https://github.com/AizazJan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="iconsForContact"
                  src={githubLogo}
                  alt="LinkedIn"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-aizaz-tahir-101669262/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="iconsForContact"
                  src={linkedinLogo}
                  alt="LinkedIn"
                />
              </a>
            </div>
            <div className="Rights">
              @2025 Muhammad Aizaz Tahir All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
