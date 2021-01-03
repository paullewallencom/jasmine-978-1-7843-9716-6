describe "Open a New Bank Account: ", ->
	makeDateOfBirth = (age) ->
		new Date().getTime() - (age * MS_IN_A_YEAR)
	describe "#age", ->
		it "returns the age of the person in years", ->
			customer = new Customer(makeDateOfBirth 5)
			expect(customer.age()).toBe 5
	describe "Person age is 18 years or above", ->
		it "should be eligible to open a Bank Account", ->
			customer = new Customer(makeDateOfBirth 18)
			expect(customer.isValid()).toBeTruthy()
			customer = new Customer(makeDateOfBirth 22)
			expect(customer.isValid()).toBeTruthy()
	describe "Person age is below 18 years", ->
		it "should not be eligible to open a new Bank Account", ->
			customer = new Customer(makeDateOfBirth 5)
			expect(customer.isValid()).toBeFalsy()
	describe "CoffeeScript with Jasmine Spies", ->
		describe "#isValidLabel", ->
			beforeEach ->
				@customer = new Customer(makeDateOfBirth 18)
				spyOn(@customer, "isValid")
			it "returns 'YES' when #isValid is true", ->
				@customer.isValid.and.returnValue(true)
				expect(@customer.isValidLabel()).toEqual "YES"
			it "returns 'NO' when #isValid is false", ->
				@customer.isValid.and.returnValue(false)
				expect(@customer.isValidLabel()).toEqual "NO"