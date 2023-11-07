import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us Page test cases", () => {


    test("should load contact.js component", () => {
        //You can also write👉  it("should load contact.js component", () => {...}

        render(<Contact />)//this wil render it to the js DOM

        /*Now we will test it if it was successfully rendered:
        For that we will use the screen() method
        screen is an obj that comes from the testing library
        that give us access to the component elements*/

        /*Thanks to the screen obj, we can use the getbyRole
        method to find all the elements with a given role value: */

        const heading = screen.getByRole("heading")

        /*Now that we got our element, we can expect some results
        by manipulating it */

        expect(heading).toBeInTheDocument();


    })

    test("should load button inside contact.js component", () => {

        render(<Contact />)//this wil render it to the js DOM

        const button = screen.getByRole("button")
        //You can also access the button with screen.getByText("Submit")

        expect(button).toBeInTheDocument();
    })


    it("should load the name input inside contact.js component", () => {

        render(<Contact />)//this wil render it to the js DOM

        const input = screen.getByPlaceholderText("name")

        expect(input).toBeInTheDocument();
    })


    //Check if renders Multiple input boxes:

    test("should load 2 input boxes inside contact.js component", () => {

        render(<Contact />)

        //there's not role named "input", the appropiate term is "textbox:"
        const inputBoxes = screen.getAllByRole("textbox")

        //console.log(inputBoxes[0])

        //since our inputBoxes is an array of objects:
        expect(inputBoxes.length).toBe(2)
    })

})

