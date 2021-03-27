import { TestScheduler } from "jest";

const add = (a , b) => a + b;
const generateGreetings = (name) => `Hello ${name}`

test("Should add two numbers", ()=> {
    const result = add(5, 6)

    expect(result).toBe(11)
})

test("Should generate a greeting", () => {
    const greeting = generateGreetings("Yash")

    expect(greeting).toBe("Hello Yash")
})