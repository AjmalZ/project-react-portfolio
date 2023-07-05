/* eslint-disable react/jsx-indent-props */
/* eslint-disable max-len */
/* eslint-disable indent */
import React from 'react';
import './Projects.css';
import data from '../assets/projects.json'

export const ProjectCard = () => {
    return (
        <div className="projectGrid">
            {data.map((item) => (
                <div className="center">
                    <div className="projectWrap">
                        <div className="projectBox" key={item.title}>
                            <a
                                className="link"
                                href={item.netlify}
                                alt="project landingpage"
                                target="_blank"
                                rel="noreferrer">
                                <div className="overlay">
                                    <div className="overlayText">
                                        {item.overlay}
                                    </div>
                                </div>
                                <img className="projectBackground" src={item.image} alt="project poster" />
                            </a>
                        </div>
                        <div className="titleContainer">
                            <a
                                className="link"
                                href={item.netlify}
                                alt="project landingpage"
                                target="_blank"
                                rel="noreferrer">
                                <div className="projectTitle">
                                    {item.title}
                                </div>
                                <div className="projectDescription">
                                    {item.description}
                                </div>
                            </a>
                            <div className="tagContainer">
                                {item.tools.map((tag) => (
                                    <div className="tag" key={tag}>
                                        {tag}
                                    </div>
                                ))}
                            </div>
                            <div className="links">
                                <a
                                    className="gitIcon"
                                    href={item.netlify}
                                    alt="project landingpage"
                                    target="_blank"
                                    rel="noreferrer">

                                    <button className="button" type="button">
                                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><switch><g><path d="M60 120C26.9 120 0 93.1 0 60S26.9 0 60 0s60 26.9 60 60-26.9 60-60 60zM60 5C29.7 5 5 29.7 5 60s24.7 55 55 55 55-24.7 55-55S90.3 5 60 5z" fill="white" /><path d="M60 120c-19.3 0-34.4-26.4-34.4-60S40.7 0 60 0s34.4 26.4 34.4 60-15.1 60-34.4 60zM60 5C43.8 5 30.5 29.7 30.5 60s13.2 55 29.5 55 29.5-24.7 29.5-55S76.2 5 60 5z" fill="white" /><path d="M12.2 25.6h95.6v5H12.2zM12.2 89.5h95.6v5H12.2zM2.5 57.5h115v5H2.5z" fill="white" /><path d="M57.5 2.5h5v115h-5z" fill="white" /></g></switch></svg>
                                        <p className="text">Live demo</p>
                                    </button>
                                </a>
                                <a
                                    className="gitIcon"
                                    href={item.github}
                                    alt="project landingpage"
                                    target="_blank"
                                    rel="noreferrer">

                                    <button className="button" type="button">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z" fill="white" />
                                        </svg>
                                        <p className="text">View the code</p>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}