describe("JavaScript Exceptions: ", function(){
	describe("Validate Errors:", function(){
		//Scenario 1
		it("Error should be thrown on any " +
				"unexpected behavior or malfunctioning", function(){
			expect(addTwonumbers).not.toThrow();
			expect(generateMaxValue).toThrow();
			expect(generateMaxValue).toThrowError();
		});
		it("Error should be thrown on passing any " +
				"unexpected or wrong arguments", function(){
			/*Assertions to test parameters 
			 * of addTwonumbers() function*/
			expect(addTwonumbers.bind(null,1,2)).not.toThrow();
			expect(addTwonumbers.bind(null,1,2)).not.toThrowError();
			expect(function(){addTwonumbers(1,4);}).not.toThrow();
			/*Assertions to test parameters 
			 * of generateMaxValue() function*/
			expect(generateMaxValue.bind(null,5)).not.toThrow();		
			expect(generateMaxValue.bind(this,5)).not.toThrow();		
			expect(function() {generateMaxValue(2000);}).toThrow();
			expect(function() {generateMaxValue(2000);}).toThrowError();
		});
		//Scenario 2
		describe("Validate Error Messages: ", function(){
			it("Error messages should be consistent " +
					"throughout the application", function(){
				expect(generateMaxValue).toThrow(new Error("No value is assigned to variable intVar!"));
				expect(generateMaxValue).toThrowError("No value is assigned to variable intVar!");
				expect(generateMaxValue.bind(null,5000)).toThrow(new Error("Maximum value should be between 0 and 1000"));
				expect(generateMaxValue.bind(null,5000)).toThrowError("Maximum value should be between 0 and 1000");
				expect(function() {generateMaxValue(5000);}).toThrowError("Maximum value should be between 0 and 1000");
			});
		});
	});
});