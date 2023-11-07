import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../../utils/redux/appStore.js";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";

it("Should load Header Component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
});