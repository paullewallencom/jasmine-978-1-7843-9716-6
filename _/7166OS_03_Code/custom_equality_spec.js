var MyCustomEquality = function(strFirstString, strSecondString) {
	if (typeof strFirstString == "string" && typeof strSecondString == "string") {
		return strFirstString.substr(0,5) == strSecondString.substr(0,5);
	};
};
describe("Custom Equality Function: ", function() {
	beforeEach(function() {
	    jasmine.addCustomEqualityTester(MyCustomEquality);
	});	
	describe("Strings: ", function(){
		it("should be custom equal if first word of both the strings is 'Packt'", function() {
		    expect("Packt Jasmine Book").toEqual("Packt Java Cookbook");
		});		
	});
});