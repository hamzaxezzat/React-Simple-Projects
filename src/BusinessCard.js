import { computeHeadingLevel } from "@testing-library/react";
import React from "react";
import "./business-card/style.css";
import Info from "./business-card/components/Info";
import About from "./business-card/components/About";
import Footer from "./business-card/components/Footer";

export default function BusinessCard() {
    return (
        <div className="mainContainer">
            <Info />
            <About />
            <Footer />
        </div>
    );
}
