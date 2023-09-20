import React from "react";
import '../App.css';

import myPhoto from '../img/my-photo.jpg';


export default function home() {
    return (
        <>
            <br />
            <br />
            <div id="home-div">
                <div className="name-div">
                    <h1>
                        Hi There, I'm <br />
                        Batool <span style={{ color: "#ff7b00" }}>Al-Jonidee</span>
                    </h1>
                    <br />
                </div>
                <div className="photo-div">
                    <img
                        src={myPhoto}
                        alt="my personal photo"
                        className="my-photo"
                    />
                </div>
            </div>
        </>
    );
}