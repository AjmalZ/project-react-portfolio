/* eslint-disable indent */
/* eslint-disable linebreak-style */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as faEnvelopeSolid } from '@fortawesome/free-solid-svg-icons';
import './ContactFooter.css';
import portrait from '../images/portrait.jpg';
import './SocialMediaLinks.css';

export const Contact = () => {
    return (
        <div className="contact">
            <footer className="contact">
                <h2>Time to talk</h2>
                <div className="footerPortraitAndName">
                    <div className="footerPortrait">
                        <div className="portrait"><img className="portraitImg" src={portrait} alt="" /></div>
                    </div>
                    <div className="footerName">
                        <h3>Ajmal Zahir</h3>
                        <h2>Frontend developer</h2>
                    </div>
                </div>
                <div className="phoneNumber">
                    <h6>+46(0)736 32 82 96</h6>
                </div>
                <div className="email">
                    <h6>ajmal.zahir@hotmail.com</h6>
                </div>
                <div className="socialMediaLinks">
                    <ul>
                        <li>
                            <a className="linkedin" href="https://www.linkedin.com/in/ajmal-zahir-developer/" target="_blank" rel="noreferrer">
                                <span />
                                <span />
                                <span />
                                <span />
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </li>
                        <li>
                            <a className="github" href="https://github.com/AjmalZ" target="_blank" rel="noreferrer">
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
            </footer>
        </div>
    )
}