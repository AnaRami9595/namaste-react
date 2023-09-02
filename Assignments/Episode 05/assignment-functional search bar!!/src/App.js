import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"



const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
}

//Let's say that this is what the Api brings us

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)