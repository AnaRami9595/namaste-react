import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login")
    let btnName = "Login"
    const onlineStatus = useOnlineStatus()

    return (
        <div className="header flex justify-between px-2">
            <div className="logo-text  flex">
                <img className="logo h-24  m-2"
                    src={require("../../images/Logo.jpg")} alt="Food App logo" />
                <p className="name-app py-4 my-4
                px-3 font-extrabold text-xl">My Food App</p>
            </div>
            <div className="nav-items align-middle">
                <ul className="flex p-4 m-4" >
                    <li className="px-3">{onlineStatus ? "🟢online" : "🔴offline"}</li>
                    <li className="px-3"><Link to="/">Home</Link></li>
                    <li className="px-3"><Link to="/about">About</Link></li>
                    <li className="px-3"><Link to="/contact">Contact</Link></li>
                    <li className="px-3"><Link to="/groceries">Groceries</Link></li>
                    <li className="px-3">Cart</li>
                    <button
                        className="btn-login mx-2
                        text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-3 py-2 text-center mr-2 mb-2"
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