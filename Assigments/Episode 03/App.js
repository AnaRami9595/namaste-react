import React from "react";
import ReactDOM from "react-dom"
import Header from "./Header";

/*📝Instructions:

1. Create a Nested Header Element using React.createElement
 (h1, h2 h3 inside a div with a class named "title")

2. Create a functional component of the same with JSX

3. Pass attributes into the tag in JSX

4. Make Composition of component (add component inside another)

5. Create a Header Component from scratch using Functional
Components with JSX

    - Add logo on the left
    - Add a search bar in the middle
    - Add User icon on the right
    - Ad Css to make it look nice

*/


//1️⃣Nester Header with createElEMENT

const parent = React.createElement("div", {className: "title"},[
    React.createElement("h1", {}, "Hello"),
    React.createElement("h2", {}, "Hello"),
    React.createElement("h3", {}, "Hello"),
    ]);

//root.render(parent)//This works well ✅

//2️⃣Nester Header with JSX🍤 with Functional Component🧩
//3️⃣Attributes inside tag:

const JsxHeader = () => {
    return ( 
        <div className = "title">
            <h1 className="red">Hello</h1>
            <h2 className="white">Hello</h2>
            <h3 className="blue">Hello</h3>
        </div>
    );
}

//1️⃣Component🧩 Composition

const CompositionComponent = () => {
    return ( <div>
        <JsxHeader/>
    </div> );
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Header/>)
 


