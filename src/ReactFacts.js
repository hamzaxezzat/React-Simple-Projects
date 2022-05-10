import React from "react";
import Navbar from "./react-facts/components/Navbar";
import Main from "./react-facts/components/Main";
import "./react-facts/style.css";

export default function ReactFeatures() {
    return (
        <div className="container mainContainer">
            <Navbar />
            <Main />
        </div>
    );
}
