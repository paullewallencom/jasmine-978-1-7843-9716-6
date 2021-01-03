var personNameValidationMatcher = {
	toContainFirstAndLastName: function() {
		return {
			compare: function(actual) {
				if (actual.firstName != undefined && actual.lastName != undefined){
					return {
						pass:true,
						message:"Person is eligible to place the online order"
					};
				} else {
					return {
						pass:false,
						message:"First name and last name are mandatory to process the online order"
					};					
				};
			}
		};
	}
};
var personAgeValidationMatcher  = {
		toBeOlderThan: function() {
			return {
				compare: function(actualAge, expectedAge) {
					if (expectedAge === undefined) {
						throw "Expected value is required";
					}				
					if (actualAge>=expectedAge) {
						return {
							pass:true,
							message:"Person is eligible to place online order"
						};
					}else {
						return {
							pass:false,
							message:"Minimum person's age should be 21 years to place the order online"
						};
					};
				}
			};
		}
	};
describe("<XYZ> Company : Online Order Module ", function() {
	describe("When to place the online order: ", function(){
		beforeEach(function() {
		    jasmine.addMatchers(personAgeValidationMatcher);
		    jasmine.addMatchers(personNameValidationMatcher);
		});
		//Scenario 1
		it("Age should be greater than " +
				"or equal to 21 years", function() {
		    var myPerson = new Person(25, "James", "Smith");
			expect(myPerson.age).toBeOlderThan(20);
		});
		//Scenario 2
		it("First Name and Last Name are required " +
				"to place the online order", function() {
		    var myPerson = new Person(23, "James", "Smith");
			expect(myPerson).toContainFirstAndLastName();
		});
	});
});
