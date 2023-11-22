import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header.js"
import Cart from "../Cart";
import MOCK_DATA_MENU from "../../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../../utils/redux/appStore.js";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_MENU),
  })
);

it("should Load Restaurant Menu Component", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <RestaurantMenu />
            <Header/>
          </Provider>
        </BrowserRouter>
      )
    );

    const accordionHeader = screen.getByText("Extras (4)")
    fireEvent.click(accordionHeader)

    const foodItems = screen.getAllByTestId("foodItems")
    expect(foodItems.length).toBe(4)

    //Getting the add➕ buttons:
    const addBtns =  screen.getAllByRole("button", {name: "Add +"})

    //Clicking the first add➕ button of our array:
    fireEvent.click(addBtns[0])

    //Checking if the Header has been updated:
    expect(screen.getByText("🛒 (1 items)")).toBeInTheDocument()

    //Clicking the second add➕ button of our array:
    fireEvent.click(addBtns[1])

    //Checking if the Header has been updated:
    expect(screen.getByText("🛒 (2 items)")).toBeInTheDocument()

});

it("should render Cart component with 2 items", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Cart/>
            <RestaurantMenu />
            <Header/>
          </Provider>
        </BrowserRouter>
      )
    );

    const accordionHeader = screen.getByText("Extras (4)")

    fireEvent.click(accordionHeader)

    const addBtns =  screen.getAllByRole("button", {name: "Add +"})

    fireEvent.click(addBtns[0])

    fireEvent.click(addBtns[1])

    /* Counting our foodItems including the ones in the 
    Restaurant Menu(4), 
    header(2)
    and the cart component(1)*/
    expect(screen.getAllByTestId("foodItems").length).toBe(8);

    //checking our "Clear Cart button"
    fireEvent.click(screen.getByRole("button", {name : "Clear Cart"}))
    //Now only RestaurantMenu is rendering the 4 foodItems insde `Extras`
    expect(screen.getAllByTestId("foodItems").length).toBe(4);
    //checking if cart component is empty:
    expect(screen.getByText("Cart is empty")).toBeInTheDocument()

      })