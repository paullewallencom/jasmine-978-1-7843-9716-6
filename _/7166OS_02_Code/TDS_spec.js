describe("Employees of <XYZ> Company:",function(){
	//Scenario -1
	describe("Tax deducted for Indian Employees, ", function(){
		it("Currency should be used INR", function(){
			var myCurrency = new Currency("INDIA");
			expect(myCurrency.currency).toBe("INR");
		});	
		//Scenario -4
		it("Should be deducted 10% if Gross Income is between RS 250,000/- and RS 500,000/-", function(){
			var myTaxableIncome = new TaxIndiaEmp();
			//Let's assume the taxable income is RS 300,000/-
			myTaxableIncome.setIncome(300000);			
			expect(myTaxableIncome.calculateTDS()).toEqual(5000);
		});
	});
	//Scenario -2
	describe("Tax deducted for United Kingdom Employees, ", function(){
		it("Currency should be used GBP (Pound, UK£)", function(){
			var myCurrency = new Currency("UK");
			expect(myCurrency.currency).toBe("UK£");
		});	
	});
	//Scenario -3
	describe("Tax deducted for United States Employees, ", function(){
		it("Currency should be used USD (US$)", function(){
			var myCurrency = new Currency("US");
			expect(myCurrency.currency).toBe("US$");
		});	
	});
});