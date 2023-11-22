import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login")
    let btnName = "Login"
    const onlineStatus = useOnlineStatus()

    const { loggedInUser } = useContext(UserContext)

    //Suscribing to the sotore using a Selector:
    const cartItems = useSelector(store => store.cart.items)
    //now this cart will get the data of the items
 

    return (
        <div className="header flex justify-between px-2">
            <div className="logo-text flex"> <img 
                data-testid = "logo"
                className="logo h-24  m-2"
                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGdAJTwTgGqqz4Tf9yfVlVSku_5m-e_wGcBA&usqp=CAU"} alt="Food App logo" />
                <p className="name-app py-4 my-4
                px-3 font-extrabold text-xl">My Food App</p>
            </div>
            <div className="nav-items align-middle">
                <ul className="flex p-4 m-4" >
                    <li 
                    data-testid = "online status"
                    className="px-3">{onlineStatus ? "🟢online" : "🔴offline"}</li>
                    <li className="px-3"><Link to="/">Home</Link></li>
                    <li className="px-3"><Link to="/about">About</Link></li>
                    <li className="px-3"><Link to="/contact">Contact</Link></li>
                    <li className="px-3"><Link to="/groceries">Groceries</Link></li>
                    <li className="px-3 text-2xl"><Link to="/cart">🛒 ({cartItems.length} items)</Link></li>
                    <button
                        className="btn-login mx-2
                        text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-3 py-2 text-center mr-2 mb-2"
                        onClick={() => {
                            btnNameReact === "Login"
                                ? setBtnNameReact("Logout")
                                : setBtnNameReact("Login")
                        }
                        }
                    >
                        <Link to="/login"> {btnNameReact}</Link>
                    </button>
                    <li className="px-3 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
}



export default Header;