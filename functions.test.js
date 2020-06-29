const functions = require("./functions")

//--- To run functions before and after each test ---//

// beforeEach(() => initDatabase())
beforeAll(() => initDatabase())
// afterEach(() => closedDatabase())
afterAll(() => closedDatabase())


const initDatabase = () => console.log("Database Initialiazed...");
const closedDatabase = () => console.log("Database Closed...");
const nameCheck = () => console.log("Checking Name...");


describe("Checking Names", () => {
	beforeEach(() => nameCheck())
	test("User is Jeff", () => {
		const user = "Jeff"
		expect(user).toBe("Jeff")
	})
})



//--- Tests ---//


// for primitive types (number, string...)
test("Adds 2 + 2 to equal 4", () => {
	expect(functions.add(2, 2)).toBe(4) // expected .. to be ..
})


// not
test("Adds 2 + 2 to NOT equal 5", () => {
	expect(functions.add(2, 2)).not.toBe(5) 
})


// is null
test("Should be null", () => {
	expect(functions.isNull()).toBeNull() 
})


// falsy
test("Should be falsy", () => {
	expect(functions.checkValue(null)).toBeFalsy() 
})


// for objects or arrays, to equal
test("User should be Daniela Witteveen", () => {
	expect(functions.createUser()).toEqual({ 
		firstName: "Daniela",
		lastName: "Witteveen"
	}) 
})


// Less than and greater than
test("Should be under 1600", () => {
	const load1 = 800;
	const load2 = 700

	expect(load1 + load2).toBeLessThanOrEqual(1600) 
})


// Regex
test("There is no I in team", () => {
	expect("team").not.toMatch(/I/i) // for both lower and uuppercase
})


// Arrays
test("Admin should be in usernames", () => {
	usernames = ["kate", "jack", "admin"]
	expect(usernames).toContain("admin")
})


// Async data. Promises: assertions and return
test("User fetched name should be Leanne Graham", () => {
	expect.assertions(1) // how many times calls
	return functions.fetchUser().then(data => {
				expect(data.name).toEqual("Leanne Graham")
			})
})


// Async data. Async Await
test("User fetched name should be Leanne Graham", async() => {
	expect.assertions(1) // how many times calls
	const data = await functions.fetchUser();
	expect(data.name).toEqual("Leanne Graham")
})