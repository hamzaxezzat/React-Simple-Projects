import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./style.css";

export default function App() {
    const [dark, setDark] = React.useState(true);

    // console.log(dark);
    return (
        <div className={`AppContainer ${!dark ? "light-mode" : ""}`}>
            <div className="container mainContainer">
                <Navbar dark={dark} setDark={setDark} />
                <Main />
            </div>
        </div>
    );
}
