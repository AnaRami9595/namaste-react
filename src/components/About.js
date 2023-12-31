import User from "./User";
import UserClass from "../UserClass";
import React from "react";
import { Component } from "react";
import UserContext from "../../utils/UserContext"

class About extends Component {

    constructor(props) {
        super(props);
        console.log("Parent constructor")
    }

    componentDidMount() {
        console.log("Parent Component did Mount")
    }

    render() {
        console.log("Parent render")

        return (<div className="about">
            <h1>About</h1>
            <UserContext.Consumer
            >{({ loggedInUser }) => (
                <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}</UserContext.Consumer>
            <h2>This is Namaste React series</h2>
            <User name={"First"} location=
                {"Dehradun (functional)"}></User>

        </div>)
    }
}

export default About;
