import { computeHeadingLevel } from "@testing-library/react";
import React from "react";
import BusinessCard from "./BusinessCard";
import ReactFeatures from "./ReactFacts";
import "./stylel.css";

export default function App() {
    return (
        <div className=" AppContainer">
            <h1 className="appTitle">
                Project 1 <br />
                <span>React Facts</span>
            </h1>
            <ReactFeatures />
            <h1 className="appTitle">
                Project 2 <br />
                <span>Digital Business Card</span>
            </h1>
            <BusinessCard />
        </div>
    );
}
