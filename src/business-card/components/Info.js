import React from "react";
import logo from "../images/profile.jpg";

export default function Info() {
    return (
        <div className="infoSection">
            <img src={logo} alt="dsads" />
            <h2>Hamza Ezzat</h2>
            <h5>Frontend Developer</h5>
            <small>hamzaezzat.com</small>
            <div className="infoButtons">
                <button id="emailButton">
                    <i className="icofont-email"> </i>
                    Email
                </button>
                <button id="linkedinButton">
                    <i className="icofont-linkedin"> </i>
                    Linkedin
                </button>
            </div>
        </div>
    );
}
