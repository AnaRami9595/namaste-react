import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../../utils/redux/appStore.js";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


it("Should load Header Component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const  login = screen.getByRole("button", {name: "Login"})
    //const loginButton = screen.getByText("Login") ⬅️is also correct
    //but you should use Role

    expect(login).toBeInTheDocument();
});

it("Should load Header Component with no cart items", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const  cartItems = screen.getByText("🛒 (0 items)")

    expect(cartItems).toBeInTheDocument();
});

it("Should load Cart Component inside Header", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const  cart = screen.getByText(/🛒/)

    expect(cart).toBeInTheDocument();
});

it("Should change Login button to Logout on Click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"});
        //we can use this to check on Events
        //syntax: fireEvent.eventThatWillFire(place where my event should fire)
    fireEvent.click(loginButton)

        //Now let's access the logout button that we changed to:

        const logoutButton = screen.getByRole("button", {name: "Logout"});

        /*If the event was fired succesfully, we will expect the  Logout
        Button to be in the document:*/

    expect(logoutButton).toBeInTheDocument();
});