import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"
import { createBrowserRouter, RouterProvider, Outlet, Link } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";
import Shimmer from "./components/Shimmer";
import UserContext from "../utils/UserContext.js";
//import Grocery from "./components/Grocery";
import { Provider } from "react-redux";
import appStore from "../utils/redux/appStore.js";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {

    const [userName, setUserName] = useState()

    useEffect(() => {
        //make an Api call and send username and password
        const data = {
            name: "Akshay Saini"
        };
        setUserName(data.name)
    }, []);

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{
                loggedInUser: userName,
                setUserName
            }}>
                <div className="app">
                    <UserContext.Provider value={{ loggedInUser: "La Pollohontas" }}>
                        <Header />
                    </UserContext.Provider>

                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },

            {
                path: "/about",
                element: <About />
            },

            {
                path: "/contact",
                element: <Contact />
            },

            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },

            {
                path: "/login",
                element: <Login />
            },

            {
                path: "/groceries",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
            },

            {
                path: "/cart",
                element: <Suspense fallback={<h1>Loading...</h1>}><Cart /></Suspense>
            },
        ],
        errorElement: <Error />
    }

]);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)