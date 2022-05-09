function TitleContent() {
    return <h1>Hamza Resturant</h1>;
}

function MainContent() {
    return (
        <nav className="header">
            <TitleContent />
            <ul>
                <li>Menu</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

ReactDOM.render(MainContent(), document.getElementById("root"));

// ! Nots
// * How to call the function into JSX?
// * Solve: <FunctionName />

// ? ========== Start of - Declarative vs Imparative ==========
// Declarative : Just tell me what you need to do?
// The Computer will do it instead of you
// Imparative: You do what you need in Computer without Instractions
// Exmaples
// Dec:
// * ReactDOM.render(MainContent(), document.getElementById("root"));
// Imp:
// * const root = document.getElementById("root");
// * const title = document.createElement("h1");
// * title.textContent = "Hello Vanilla JS";
// * title.classList.add("header");
// * root.appendChild(title);
// ? ========== End of - Declarative vs Imparative ==========

//   paragraph
// * Code
// ! Title
// ? Topic
// TODO

// ? HTML vs. JSX
// class | className
