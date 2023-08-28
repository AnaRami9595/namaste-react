import React from "react";
import ReactDOM  from "react-dom";

//React Element: 

/*const heading = React.createElement("h1", {id: "heading"}, "Namaste React 🚀" )
//As we know is an object. When is render, then it becomes an HTML element
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
console.log(heading)*/


//JSX //💻React Functional Component

//const Title = () =>  ( <h1>Namaste React using JSX🚀</h1>);

    const elem = <span>React Element</span>



    const HeadingComponent = () => {
        return (<div id ="container">
            <h2 className="heading">Namaste React Functional Component</h2>
        </div>  );
    };

    const title =  (
    <h1 className="head" tabIndex= "5">
    {elem}
    Namaste React using JSX
    <HeadingComponent></HeadingComponent>
    {HeadingComponent()}
    </h1>
    );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(title)
   