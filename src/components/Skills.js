/* eslint-disable indent */
/* eslint-disable linebreak-style */
import React from 'react';
import './Skills.css';

export const Skills = () => {
    return (
        <div className="skillSection">
            <section className="skills">
                <h2>Skills</h2>
                <div className="skillsBox">
                    <div className="code skillInfo">
                        <h3 className="skillh3 skillsh3Red">Frontend</h3>
                        <p>React</p>
                        <p>Javascript ES6</p>
                        <p>HTML5</p>
                        <p>CSS3</p>
                        <p>Node.js</p>
                        <p>Redux</p>
                        <p>Express.js</p>
                        <p>MongoDB</p>
                        <p>Styled Components</p>
                        <p>Tailwind</p>
                    </div>

                    <div className="tools skillInfo">
                        <h3 className="skillh3 skillsh3LightBlue">Toolbox</h3>
                        <p>Postman</p>
                        <p>Figma</p>
                        <p>Canva</p>
                        <p>GitHub</p>
                        <p>VScode</p>
                        <p>Google Cloud</p>
                        <p>Slack</p>
                    </div>

                    <div className="more skillInfo">
                        <h3 className="skillh3 skillsh3Blue">More</h3>
                        <p>Pair/Mob-Programming</p>
                        <p>Process design</p>
                        <p>Concept development</p>
                        <p>Agile methodology</p>
                    </div>

                    <div className="upcomming skillInfo">
                        <h3 className="skillh3 skillsh3Green">Upcomming</h3>
                        <p>TypeScript</p>
                        <p>React Native</p>
                        <p>Python</p>
                    </div>
                </div>
            </section>
        </div>
    )
}