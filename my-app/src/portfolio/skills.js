import React from 'react'
import '../App.css';

import cPlusPlus from '../img/skills-img/ISO_C++_Logo.svg.png';
import construct from '../img/skills-img/construct-2-1.png';
import html from '../img/skills-img/HTML5.png';
import css from '../img/skills-img/CSS3_logo.svg.png';
import python from '../img/skills-img/Python-logo-notext.svg.png';
import c from '../img/skills-img/C_Logo.png';
import java from '../img/skills-img/java.jpg';
import js from '../img/skills-img/js.png';
import jq from '../img/skills-img/jquery.png';
import sql from '../img/skills-img/sql.png';
import csharp from '../img/skills-img/c- sharp.png';
import asp from '../img/skills-img/aspnet.png';
import android from '../img/skills-img/Android-Logo-2008.png';
import photoshop from '../img/skills-img/photoshop.png';
import mco from '../img/skills-img/Microsoft_Office_logo_(2013–2019).svg.png';

import { FaLaptopCode } from 'react-icons/fa6';


export default function skills() {
  return (
    <>
      <br />
        <br />
        <div id="skills-div">
          <br />
          <br />
          <div className="skills-header">
            <h2>
              <FaLaptopCode style={{ color: "#ffffff",fontSize:'25px' }} />{' '}
              <span className="skills-span"> Skills &amp; </span>
              <span className="abilities-span">Abilities</span>
            </h2>
          </div>
          <br />
          <br />
          <div className="skills-box">
            <div className="skills-div-individual">
              <img
                src={cPlusPlus}
                alt="c++ logo"
                className="skills-img"
              />
              <h4>C++</h4>
            </div>
            <div className="skills-div-individual">
              <img
                src={construct}
                alt="construct-2 logo"
                className="skills-img"
              />
              <h4>construct-2</h4>
            </div>
            <div className="skills-div-individual">
              <img
                src={html}
                alt="html logo"
                className="skills-img"
              />
              <h4>HTML5</h4>
            </div>
            <div className="skills-div-individual">
              <img
                src={css}
                alt="css logo"
                className="skills-img"
              />
              <h4>css3</h4>
            </div>
            <div className="skills-div-individual">
              <img
                src={python}
                alt="python logo"
                className="skills-img"
              />
              <h4>Python</h4>
            </div>
            <div className="skills-div-individual">
              <img
                src={c}
                alt="c logo"
                className="skills-img"
              />
              <h4>C</h4>
            </div>
            <div className="skills-div-individual">
              <img
                src={java}
                alt="Java logo"
                className="skills-img"
              />
              <h4>Java</h4>
            </div>
            <div className="skills-div-individual">
              <img
                src={js}
                alt="Javascript logo"
                className="skills-img"
              />
              <h4>Javascript</h4>
            </div>
            <div className="skills-div-individual">
              <img
                src={jq}
                alt="jquery logo"
                className="skills-img"
              />
              <h4>jquery</h4>
            </div>
            <div className="skills-div-individual">
              <img
                src={sql}
                alt="sql logo"
                className="skills-img"
              />
              <h4>SQL</h4>
            </div>
            <div className="skills-div-individual">
              <img
                src={csharp}
                alt="c# logo"
                className="skills-img"
              />
              <h4>C#</h4>
            </div>
            <div className="skills-div-individual">
              <img
                src={asp}
                alt="ASP.NET logo"
                className="skills-img"
              />
              <h4>ASP.NET</h4>
            </div>
            <div className="skills-div-individual">
              <img
                src={android}
                alt="Android Logo"
                className="skills-img"
              />
              <h4>Android</h4>
            </div>
            <div className="skills-div-individual">
              <img
                src={photoshop}
                alt="photoshop logo"
                className="skills-img"
              />
              <h4>photoshop</h4>
            </div>
            <div className="skills-div-individual">
              <img
                src={mco}
                alt="Microsoft Office logo"
                className="skills-img"
              />
              <h4>Microsoft Office</h4>
            </div>
          </div>
        </div>
    </>
  )
}