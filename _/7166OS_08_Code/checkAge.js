(function(exports) { // customer.js
	var MS_IN_A_YEAR = 1000 * 60 * 60  * 24 * 365;
	function Customer(dob) {
		this.dateOfBirth = dob;
		if (!(this.dateOfBirth instanceof Date)) {
			this.dateOfBirth = new Date(this.dateOfBirth);
		}
	}
	Customer.prototype.age = function() {
		var now = new Date().getTime();
		var dob = this.dateOfBirth.getTime();
		return Math.round((now - dob) / MS_IN_A_YEAR);
	};
	Customer.prototype.isValid = function() {
		return (this.age() >= 18);
	};
  exports.Customer = Customer;
})(this);
