const chunkArray = require("./chunk")


// if the func exists
test("reverseString funciton exists", () => {
	expect(chunkArray).toBeDefined();
})


// 
test("Chunk an array with 10 values with a length of 2", () => {
	const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	const len = 2
	const chunkedArr = chunkArray(nums, len)

	expect(chunkedArr).toEqual([[1,2], [3,4], [5, 6], [7, 8], [9, 10]])
})



