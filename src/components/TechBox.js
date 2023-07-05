/* eslint-disable indent */
import React from 'react';
import './TechBox.css';

export const TechBox = () => {
    return (

        <div className="techBox">
            <div className="techText">
                <h2>Tech</h2>
            </div>
            <div className="techInfo">
                <p>HTML, CSS, Flexbox, <span className="js">JavaScript</span>, ES6, JSX, <span className="react">React</span>, React Hooks, Redux, Node.js, Mongo DB, Web
                    Accessibly, API:s, <span className="mob">mob-programming</span>, pair-programming, Github.
                </p>
            </div>
        </div>
    )
};