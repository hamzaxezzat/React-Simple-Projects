import React from "react";
import logo from "./logo192.png";

export default function Header() {
    return (
        <nav>
            <img src={logo} alt="logo" />
            {/* <h3>React Course - Project 1</h3> */}
            <ul className="nav-items">
                <li>Menu</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}
