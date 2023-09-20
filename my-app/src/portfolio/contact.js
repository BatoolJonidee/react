import React from 'react'
import '../App.css';

import Contact from '../img/contact.png';

import { FaHeadset } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa6';


export default function contact() {
  return (
    <>
      <br />
        <br />
        <div id="contact-div">
          <br />
          <br />
          <div className="contact-header">
            <h2>
              <FaHeadset style={{ color: "#000000",fontSize:'25px' }} />{' '}
              Contact <span className="education-span">Me</span>
            </h2>
          </div>
          <br />
          <br />
          <div className="contact-box">
            <div className="contact-img-div">
              <img
                src={Contact}
                al="contact img"
                className="contact-img"
              />
            </div>
            <div className="contact-info-div">
              {/* <i class="fa-solid fa-user" style="color: #000000;"></i> */}
              <input type="text" placeholder="Name" />
              <br />
              <input type="email" placeholder="Email" />
              <br />
              <input type="number" placeholder="Phone" />
              <br />
              <textarea placeholder="Message" defaultValue={""} />
              <br />
              <a href="./index.html" className="submit-btn">
                Submit{" "}
                <i
                  className="fa-solid fa-paper-plane"
                  style={{ color: "#ffffff" }}
                />
              </a>
              <ul className="icons-ul-footer">
                <li>
                  <a href="https://github.com/BatoolJonidee" target="_blank">
                  <FaGithub style={{ color: "#f1a649",fontSize:'30px' }} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/batool-al-jonidee-302a54279/"
                    target="_blank">
                    <FaLinkedin style={{ color: "#f1a649",fontSize:'30px' }} />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/BJonidee" target="_blank">
                    <FaTwitter style={{ color: "#f1a649",fontSize:'30px' }} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </>
  )
}
