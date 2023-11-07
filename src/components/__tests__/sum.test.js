import { sum } from "../sum"

test("sum function should sum of two numbers", () => {
    //first we will call the function we want to test:
    const result = sum(3, 4)//using some parameters
    //this line is known as ASSERTION:
    expect(result).toBe(7)
    //the result has to be the same as the toBe method
})