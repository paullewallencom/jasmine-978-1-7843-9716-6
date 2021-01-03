describe("<ABC> Company: Health Care Solution, ", function() {
	describe("When to donate or receive blood, ", function(){
		//Scenario 1
		it("Person's age should be greater than " +
				"or equal to 18 years", function() {
			var testPersonCriteria = new Person();
			spyOn(testPersonCriteria, "getAge").and.callFake(function() {
			      return 18;
		    });
			testPersonCriteria.ValidateAge("10/25/1990");
			expect(testPersonCriteria.getAge).toHaveBeenCalled();
			expect(testPersonCriteria.getAge).toHaveBeenCalledWith("10/25/1990");
			expect(testPersonCriteria.getAge()).toEqual(18);
		});
		//Scenario 2
		it("A person should not be " +
				"infected with HIV+", function() {
			var testPersonCriteria = new Person();
			spyOn(testPersonCriteria, "checkHIV");
			testPersonCriteria.ValidateHIV();
			expect(testPersonCriteria.checkHIV).toHaveBeenCalled();
		});	
		//Scenario 3
		it("In Europe, Person's age should " +
				"be greater than or equal to 16 years", function() {
			var testPersonCriteria = new Person();
			spyOn(testPersonCriteria, "getAge").and.returnValue(16);
			testPersonCriteria.ValidateAge("10/25/1990");
			expect(testPersonCriteria.getAge).toHaveBeenCalled();
			expect(testPersonCriteria.getAge()).toEqual(16);
		});	
	});
});