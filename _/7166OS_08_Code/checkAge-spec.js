var checkAge = require("../src/checkAge");
var MS_IN_A_YEAR = 1000 * 60 * 60  * 24 * 365;
function makeDateOfBirth(age) {
		return new Date().getTime() - (age * MS_IN_A_YEAR);
  };
describe("Open a New Bank Account: ", function() {
	describe("Person age is 18 years or above", function() {
		it('should be eligible to open a Bank Account', function() {
			var myCustomer = new checkAge.Customer(makeDateOfBirth(18));      
			expect(myCustomer.isValid()).toBeTruthy();
			var myCustomer = new checkAge.Customer(makeDateOfBirth(22));
			expect(myCustomer.isValid()).toBeTruthy();
		});
	});
	describe("Person age is below 18 years", function() {
		it("should not be eligible to open a new Bank Account", function() {
			var myCustomer = new checkAge.Customer(makeDateOfBirth(5));
			expect(myCustomer.isValid()).toBeFalsy();
		});
	});
});

/*var checkAge = require("../src/checkAge");
var MS_IN_A_YEAR = 1000 * 60 * 60  * 24 * 365;
function makeDateOfBirth(age) {
		return new Date().getTime() - (age * MS_IN_A_YEAR);
  };
describe("Open a New Bank Account: ", function() {
	describe('#age', function() {
		it('returns the age of the customer in years', function() {
			var myCustomer = new checkAge.Customer(makeDateOfBirth(5));
			expect(myCustomer.age()).toBe(5);
		});
	});
	describe("Person age is 18 years or above", function() {
		it('should be eligible to open a Bank Account', function() {
			var myCustomer = new checkAge.Customer(makeDateOfBirth(18));      
			expect(myCustomer.isValid()).toBeTruthy();
			var myCustomer = new checkAge.Customer(makeDateOfBirth(22));
			expect(myCustomer.isValid()).toBeTruthy();
		});
	});
	describe("Person age is below 18 years", function() {
		it("should not be eligible to open a new Bank Account", function() {
			var myCustomer = new checkAge.Customer(makeDateOfBirth(5));
			expect(myCustomer.isValid()).toBeFalsy();
		});
	});
});
*/