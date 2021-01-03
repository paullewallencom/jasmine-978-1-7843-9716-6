describe("Factorial", function() {
	  it("should get factorial of given number", function() {
		  expect(factorial(3)).toEqual(6);
	  });
	  it("should return null value for passing negative number or less/more than one arguments", function() {
		  expect(factorial(-3)).toEqual(null);
	  });
});