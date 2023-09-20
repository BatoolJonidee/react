import React from 'react';
import '../App.css';

import aiPhoto from '../img/ai-poto.jpg';

export default function About() {
    return (
        <>
            <br/>
            <br/>
            <div id="about-div">
                <div className="inner-about-div">
                    <div className="ai-photo-div">
                        <img src={aiPhoto} alt="ai photo" className="my-ai-photo" />
                    </div>
                    <div className="cv-div">
                        <h3>Eng. Batool Al-Jonidee</h3>
                        <p>
                            <b>Full stack Developer</b>
                        </p>
                        <br />
                        <p>
                            I graduated from Yarmouk University with very good rank in Computer
                            Engineering. I am very passionate about improving my coding skills,
                            developing applications &amp; websites. I built websites in variety
                            languages. Working on my skills to improve it..
                        </p>
                        <br />
                        <br />
                        <a href="./MY_CV .pdf" target="_blank" className="my-cv-p">
                            Download My CV{" "}
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

