/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable quotes */
/* eslint-disable max-len */
/* eslint-disable indent */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import portrait from "../images/portrait.png";
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
            Hi and welcome to my portfolio! I am a front end developer who loves
            programming and code, designing beautiful websites while making them
            useable. In my portfolio you will see the abilities that I possess.
            <br />
            <br />
            I always keep up with latest front end development trends and best
            practices. My works is not only about creating something that looks
            nice but also provide for smooth interaction with its users.
            <br />
            <br />
            Thanks for going through my portfolio. I’m so excited about being
            able to work with you and turn your ideas into reality.
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
          </ul>
        </div>
      </div>
      <div className="headerImg">
        <img className="headerLogo" src={headerLogo} alt="header logo" />
      </div>
    </div>
  );
};
