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
            <h2>Cloud &amp; ICT Engineer-student</h2>
          </div>
        </div>
        <div className="infoText">
          <p>
            Jag gillar att förstå hur saker hänger ihop, från nätverkslagret till molnet. Det som lockar mig med IT-infrastruktur är att det finns ett rätt svar någonstans, och att man faktiskt kan hitta det om man felsöker metodiskt.
          </p>
          <p>
            Jag kommer från industrin där jag jobbade med drift och underhåll, så jag är van vid att system måste fungera, inte bara i teorin. Det tänket tar jag med mig in i det jag bygger nu.
          </p>
          <p>
            Just nu läser jag till Cloud &amp; ICT Engineer vid Lernia och söker LIA-praktik inom cloud eller IT-infrastruktur.
          </p>
        </div>
        <div className="socialMediaLinks">
          <ul>
            <li>
              <a
                className="linkedin"
                href="https://www.linkedin.com/in/ajmal-zahir/"
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
