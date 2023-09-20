import React from "react";
import '../App.css';

import myImage from '../img/logo.png';

export default function Header() {
    return (
        <>
            <header>
                <div className="logo-div">
                    <img className="logo-img" src={myImage} alt="logo img" />
                </div>
                <div id="nav">
                    <ul className="nav-ul">
                        <li className="nav-ul nav-li">
                            <a href="#home-div" className="nav-link">
                                Home
                            </a>
                        </li>
                        <li className="nav-ul nav-li">
                            <a href="#about-div" className="nav-link">
                                About
                            </a>
                        </li>
                        <li className="nav-ul nav-li">
                            <a href="#education-div" className="nav-link">
                                Education
                            </a>
                        </li>
                        <li className="nav-ul nav-li">
                            <a href="#skills-div" className="nav-link">
                                Skills
                            </a>
                        </li>
                        <li className="nav-ul nav-li">
                            <a href="#experience-div" className="nav-link">
                                Experience
                            </a>
                        </li>
                        <li className="nav-ul nav-li">
                            <a href="#project-div" className="nav-link">
                                Projects
                            </a>
                        </li>
                        <li className="nav-ul nav-li">
                            <a href="#contact-div" className="nav-link">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}
