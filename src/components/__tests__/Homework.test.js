
import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../../utils/redux/appStore.js";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("renders my Header components, homework", ()=>{

    it("Should render a logo", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );
    
        const logo = screen.getByTestId("logo");
        expect(logo).toBeInTheDocument();
    });

    it("Should render an Empty cart component when first rendered", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );
    
        const emptyCart = screen.getByText("🛒 (0 items)")
        expect(emptyCart).toBeInTheDocument();
    });

    it("Should show the online Status", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );
    
        const onlineStatus = screen.getByTestId("online status")
        expect(onlineStatus).toBeInTheDocument()
    });
    
})