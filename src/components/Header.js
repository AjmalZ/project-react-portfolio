/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable quotes */
/* eslint-disable max-len */
/* eslint-disable indent */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope as faEnvelopeSolid } from "@fortawesome/free-solid-svg-icons";
import portrait from "../images/portrait2.jpeg";
import headerLogo from "../images/headerLogo.svg";
import "./Header.css";
import "./SocialMediaLinks.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="infoBox">
        <div className="portraitAndName">
          <div className="portrait">
            <img className="portraitImg" src={portrait} alt="" />
          </div>
          <div className="name">
            <h3>Ajmal Zahir</h3>
            <h2>Frontend developer</h2>
          </div>
        </div>
        <div className="infoText">
          <p>
            Hello and welcome to my portfolio! As a front-end developer, I have
            a passion for code, design, user-friendly websites and applications.
            My portfolio showcases my skills and experience in this field.
            <br />
            <br />
            I always stay up to date with the latest trends and best practices
            in front-end development. My work is not just about creating a
            beautiful design, but also ensuring that the user experience is
            smooth.
            <br />
            <br />
            Thank you for taking the time to explore my portfolio. I am excited
            about the opportunity to work with you and bring your vision to
            life!
          </p>
        </div>
        <div className="socialMediaLinks">
          <ul>
            <li>
              <a
                className="linkedin"
                href="https://www.linkedin.com/in/ajmal-zahir-developer/"
                target="_blank"
                rel="noreferrer"
              >
                <span />
                <span />
                <span />
                <span />
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a
                className="github"
                href="https://github.com/AjmalZ"
                target="_blank"
                rel="noreferrer"
                // eslint-disable-next-line react/jsx-closing-bracket-location
              >
                <span />
                <span />
                <span />
                <span />
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a className="envelope" href="mailto:ajmal.zahir@hotmail.com">
                <span />
                <span />
                <span />
                <span />
                <FontAwesomeIcon icon={faEnvelopeSolid} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="headerImg">
        <img className="headerLogo" src={headerLogo} alt="header logo" />
      </div>
    </div>
  );
};
