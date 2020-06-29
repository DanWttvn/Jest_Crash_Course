const reverseString = require("./reversestring")


// if the func exists
test("reverseString funciton exists", () => {
	expect(reverseString).toBeDefined();
})


test("String reverses", () => {
	expect(reverseString("hello")).toEqual("olleh");
})


test("String reverses with uppercase", () => {
	expect(reverseString("Hello")).toEqual("olleh");
})