import React from "react";
// import logo from "./images/logo.svg";
import "../style.css";

export default function Navbar({ dark, setDark }) {
    function toggleDark() {
        setDark((prevDark) => !prevDark);
    }
    console.log(dark);
    // console.log(toggleDark);
    return (
        <nav className="navbar">
            <div className="logoSection">
                <img src="./images/logo.svg" alt="" />
                <h3>ReactFacts</h3>
            </div>
            <h4> React Course Project - 1</h4>
            <div className="toggle-mode-container">
                <span>Light</span>
                <div className="toggle-mode-holder" onClick={toggleDark}>
                    <div
                        className={`toggle-mode-circle ${dark ? "dark" : ""}`}
                    ></div>
                </div>
                <span>Dark</span>
            </div>
        </nav>
    );
}
