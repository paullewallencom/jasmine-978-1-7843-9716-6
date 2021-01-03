describe("<XYZ> Company : Online Order Module ", function() {
	describe("When to place the online order: ", function(){
		beforeEach(function() {
		    jasmine.addMatchers(personAgeValidationMatcher );
		    jasmine.addMatchers(personNameValidationMatcher);
		});
		//Scenario 1
		xdescribe("Given: Age is not a " +
				"criteria to place online order", function(){
			it("Age should be greater than " +
					"or equal to 21 years", function() {
			    var myPerson = new Person(25, "James", "Smith");
				expect(myPerson.age).toBeOlderThan(20);
			});			
		});
		//Scenario 2
		xit("First Name and Last Name are required " +
				"to place the online order", function() {
		    var myPerson = new Person(23, "James", "Smith");
			expect(myPerson).toContainFirstAndLastName();
		});
		it("First Name and Last Name are required " +
				"to place the online order");
		it("First Name and Last Name are required " +
				"to place the online order", function() {
			pending();
		    var myPerson = new Person(23, "James", "Smith");
			expect(myPerson).toContainFirstAndLastName();
		});
	});
});