import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./stylel.css";

import "./react-facts/style.css";

export default function App() {
    return (
        <div className=" AppContainer">
            <div className="container mainContainer">
                <Navbar />
                <Main />
            </div>
        </div>
    );
}
