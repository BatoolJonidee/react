import React from 'react';
import '../App.css';

import { FaBriefcase } from 'react-icons/fa6';

export default function experience() {
  return (
    <>
     <br />
        <br />
        <div id="experience-div">
          <div className="skills-header">
            <h2>
              <FaBriefcase style={{ color: "#000000",fontSize:'25px' }} /> {' '}
              Experience
            </h2>
          </div>
          <br />
          <br />
          <div className="exps-container">
            <div className="ieee-exp-div">
              <p className="ieee-exp-p">
                IEEEXtreme Programming Competition 9.0
                <br />
                October 2015
              </p>
            </div>
            <div className="laptop-main-exp-div">
              <p className="laptop-main-exp-p">
                Laptop Maintenance Workshop
                <br />
                15 hours | September 2016
              </p>
            </div>
            <div className="asp-net-exp-div">
              <p className="asp-net-exp-p">
                Asp.NET Course
                <br />
                October 2016 - January 2017
              </p>
            </div>
            <div className="orange-coding-exp-div">
              <p className="orange-coding-exp-p">
                {" "}
                Orange Coding Academy
                <br />6 Months | June 2023 - Present
              </p>
            </div>
            <div className="oyil-exp-div">
              <p className="oyil-exp-p">
                Orange Yarmouk Innovation Lab
                <br />6 Months | June-Dec 2016
              </p>
            </div>
            <div className="java-exp-div">
              <p className="java-exp-p">
                Basic Java workshop
                <br />
                15 hours | October 2015
              </p>
            </div>
            <div className="arduino-exp-div">
              <p className="arduino-exp-p">
                Arduino Workshop
                <br />
                15 hours | January 2016
              </p>
            </div>
            <div className="python-exp-div">
              <p className="python-exp-p">
                Python Session
                <br />2 hours | September 2020
              </p>
            </div>
            <div className="front-exp-div">
              <p className="front-exp-p">
                Front End Workshop
                <br />
                15 hours | October 2020
              </p>
            </div>
          </div>
        </div> 
    </>
  )
}
