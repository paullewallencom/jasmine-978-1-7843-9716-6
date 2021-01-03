describe("Employees of <XYZ> Company:",function(){
	describe("Tax/TDS Currency", function(){
		var index = 0;
		var myRegion, myCurrency;
		beforeEach(function() {
			myRegion = ["INDIA", "UK", "US"];
			myCurrency = new Currency(myRegion[index]);
		  });
		afterEach(function() {
			index=index+1;
		});	
		//Scenario -1
		it("Currency should be used INR", function(){
			expect(myCurrency.currency).toBe("INR");
		});	
		//Scenario -2
		it("Currency should be used GBP (Pound, UK£)", function(){
			expect(myCurrency.currency).toBe("UK£");
		});
		//Scenario -3
		it("Currency should be used USD (US$)", function(){
			expect(myCurrency.currency).toBe("US$");
		});		
	});
	describe("Tax/TDS", function(){
		describe("For Indian Employees, ", function(){
			var index=0;
			var grossTaxableIncome, myTaxableIncome;
			beforeEach(function() {
				grossTaxableIncome = [300000, 700000, 1300000];
				myTaxableIncome = new TaxIndiaEmp();
				myTaxableIncome.setIncome(grossTaxableIncome[index]);			
			  });
			afterEach(function() {
				index=index+1;
			});
			//Scenario -4		
			it("Should be deducted 10% if Gross Income is " +
					"between RS 250,000/- and RS 500,000/-", function(){
				//Let's assume the taxable income is RS 300,000/-
				expect(myTaxableIncome.calculateTDS())
				.toEqual(5000);
			});
			//Scenario -5
			it("Should be deducted 20% if Gross Income is " +
					"between RS 500,000/- and RS 1000,000/-", function(){
				//Let's assume the taxable income is RS 700,000/-
				expect(myTaxableIncome.calculateTDS())
				.toEqual(40000);			
			});		
			//Scenario -6
			it("Should be deducted 30% if Gross Income " +
					"is >RS 1000,000/-", function(){
				//Let's assume the taxable income is RS 1300,000/-
				expect(myTaxableIncome.calculateTDS())
				.toEqual(90000);			
			});
		});
		describe("For United Kingdom Employees, ", function(){
			//Scenario -7 (Scenario -1 for this recipe)
			xit("Should be deducted 20% " +
					"if Gross Annual Income is " +
					"between £10,000/- and  £32,000", function(){
			});		
		});
		describe("For United States Employees, ", function(){
			//Scenario -8 (Scenario -2 for this recipe)
			xit("Should be deducted 35% " +
					"of Gross Taxable Income " +
					"if employee status is SINGLE", function(){
			});	
			//Scenario -9 (Scenario -3 for this recipe)
			xit("Should be deducted 30% " +
					"of Gross Taxable Income " +
					"if employee status is MARRIED", function(){
			});
		});		
	});
});