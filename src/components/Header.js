import { useState } from "react";
const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login")

    let btnName = "Login"
    return (
        <div className="header">
            <div className="logo-text">
                <img className="logo" src={require("../../images/Logo.jpg")} alt="Food App logo" />
                <p className="name-app">My Food App</p>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button
                        className="btn-login"
                        onClick={() => {
                            btnNameReact === "Login"
                                ? setBtnNameReact("Logout")
                                : setBtnNameReact("Login")
                            console.log(btnName)
                        }
                        }
                    >
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    );
}



export default Header;