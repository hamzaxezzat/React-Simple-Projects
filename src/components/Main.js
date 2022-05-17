import React from "react";
// import style from "./components.module.css";
import logoReact from "../images/logobg.png";
import "../style.css";
export default function Main() {
    const [dark, setDark] = React.useState(false);
    return (
        <main className="mainSection">
            <img src={logoReact} alt="dsadsa" />
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>
                    Powers thousands of enterprise apps, including mobile apps
                </li>
            </ul>
        </main>
    );
}
