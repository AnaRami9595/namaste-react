import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login")
    let btnName = "Login"
    const onlineStatus = useOnlineStatus()

    return (
        <div className="header">
            <div className="logo-text">
                <img className="logo" src={require("../../images/Logo.jpg")} alt="Food App logo" />
                <p className="name-app">My Food App</p>
            </div>
            <div className="nav-items">
                <ul>
                    <li>{onlineStatus ? "🟢online" : "🔴offline"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/groceries">Groceries</Link></li>
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
                        <Link to="/login"> {btnNameReact}</Link>
                    </button>
                </ul>
            </div>
        </div>
    );
}



export default Header;