import React from 'react'
import '../App.css';

import arduino from '../img/projects-img/arduino img.png';
import sharedIdeas from '../img/projects-img/shared-ideas.jpeg';
import game from '../img/projects-img/game-img.jpeg';

import { FaLaptopCode } from 'react-icons/fa6';


export default function project() {
  return (
    <>
      <br />
        <br />
        <div id="project-div">
          <br />
          <br />
          <div className="project-header">
            <h2>
              <FaLaptopCode style={{ color: "#ffffff",fontSize:'25px' }} /> {' '}
              <span className="skills-span"> Projects </span>
              <span className="abilities-span">Made</span>
            </h2>
          </div>
          <br />
          <br />
          <div className="project-box">
            <div className="project-sec">
              <div className="project-img-div">
                <img
                  src={arduino}
                  alt="arduino photo"
                  className="project-img"
                />
              </div>
              <div className="project-div">
                <h3>Elderly Service Room Using Arduino</h3>
                <br />
                <br />
                <p>Graduation Project</p>
              </div>
            </div>
            <br />
            <br />
            <div className="project-sec">
              <div className="project-img-div">
                <img
                  src={sharedIdeas}
                  alt="arduino photo"
                  className="project-img"
                />
              </div>
              <div className="project-div">
                <h3>Shared Ideas Website Using ASP.NET</h3>
                <br />
                <br />
                <p>Training Project</p>
              </div>
            </div>
            <br />
            <br />
            <div className="project-sec">
              <div className="project-img-div">
                <img
                  src={game}
                  alt="game photo"
                  className="project-img"
                />
              </div>
              <div className="project-div">
                <h3>3 Levels of 2D gameUsing Construct 2</h3>
                <br />
                <br />
                <p>Training Project</p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
