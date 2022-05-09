import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
function App() {
    return (
        <div>
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

// ReactDOM.render(<App />, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
