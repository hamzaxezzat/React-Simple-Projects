import React from "react";
import logo from "../images/logo.svg";
import style from "./components.module.css";

export default function Navbar() {
    return (
        <nav className={style.navbar}>
            <div className={style.logoSection}>
                <img src={logo} reactLogo alt="" />
                <h3>ReactFacts</h3>
            </div>
            <h4> React Course Project - 1</h4>
        </nav>
    );
}
