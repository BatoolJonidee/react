import React from 'react';
import '../App.css';
import hijjawi from '../img/hijjawi.jpg';
import kasse from '../img/kasse.png';

import { FaGraduationCap } from 'react-icons/fa6';

export default function education() {
    return (
        <>
            <br />
            <br />
            <div id="education-div">
                <br />
                <div className="education-header">
                    <h2>
                        <FaGraduationCap style={{ color: "#000000",fontSize:'25px' }} />{' '}
                        My <span className="education-span">Education</span>
                    </h2>
                    <h6>
                        Education Is Not The Learning Of Facts, But The Training Of The Mind
                        To Think.
                    </h6>
                </div>
                <br />
                <div className="edu-box">
                    <div className="uni-sec">
                        <div className="edu-img-div">
                            <img
                                src={hijjawi}
                                alt="university photo"
                                className="edu-img"
                            />
                        </div>
                        <div className="edu-div">
                            <h3>Bachelor in Computer Engineering</h3>
                            <br />
                            <br />
                            <p>Hijjawi Faculty For Engineering Technology</p>
                            <br />
                            <p>September 2012 – February 2017</p>
                        </div>
                    </div>
                    <br />
                    <div className="shl-sec">
                        <div className="edu-img-div">
                            <img src={kasse} alt="school photo" className="edu-img" />
                        </div>
                        <div className="edu-div">
                            <h3>General Secondary Certificate (scientific stream)</h3>
                            <br />
                            <br />
                            <p>King Abdullah II School For excellence</p>
                            <br />
                            <p>September 2011 - July 2012</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
