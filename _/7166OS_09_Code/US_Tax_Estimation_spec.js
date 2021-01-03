describe("Employee of <ABC> Inc:",function(){
	describe("Tax Estimation:",function(){
		beforeEach(function() {
	        loadFixtures('TaxCalculator.html');
		});
		describe("Category: Single Taxpayer",function(){
			//Scenario-1
			describe("When: Taxable income is $111,200: ",function(){
				beforeEach(function() {
				    $("#taxFilingStatusID").val("S"); 
					$("#taxGrossIncomeID").val(111200);
					$('#mySubmitID').trigger("click"); 
				});
				it("standard deduction should be applied", function(){
					expect(Number($("#myTaxableIncome").html())).toEqual(105000);
				});
				it("10% Tax Rate should be applied for the income between $0 and $9,075", function(){
					expect(myTDS_TaxBracket[0]).toEqual(907.5);
				});
				it("Tax on income  $0 to $9,075 + " + "15% Tax Rate should be applied for the income between $9,076 and $36,900", function(){
					expect(myTDS_TaxBracket[1]).toEqual(5081.25);
				});
				it("Tax on income  $0 to $36,900 + " + "25% Tax Rate should be applied for the income between $36,901 and $89,350", function(){
					expect(myTDS_TaxBracket[2]).toEqual(18193.75);
				});
				it("Tax on income  $0 to $89,350 + " + "28% Tax Rate should be applied for the income between $89,351 and $186,350", function(){
					expect(Number($("#myEstimatedTax").html())).toEqual(22575.75);
				});
			});
			//Scenario-2
			describe("When: Taxable income is $450,000: ",function(){
				beforeEach(function() {
				    $("#taxFilingStatusID").val("S"); 
					$("#taxGrossIncomeID").val(450000);
					$('#mySubmitID').trigger("click");
				});
				//Test Code to implement scenario 2.....			
				it("standard deduction should be applied ", function(){
					expect(Number($("#myTaxableIncome").html())).toEqual(443800);
				});
				it("10% Tax Rate should be applied for the income between $0 and $9,075", function(){
					expect(myTDS_TaxBracket[0]).toEqual(907.5);
				});
				it("Tax on income  $0 to $9,075 + " + "15% Tax Rate should be applied for the income between $9,076 and $36,900", function(){
					expect(myTDS_TaxBracket[1]).toEqual(5081.25);
				});
				it("Tax on income  $0 to $36,900 + " + "25% Tax Rate should be applied for the income between $36,901 and $89,350", function(){
					expect(myTDS_TaxBracket[2]).toEqual(18193.75);
				});
				it("Tax on income  $0 to $89,350 + " + "28% Tax Rate should be applied for the income between $89,351 and $186,350", function(){
					expect(myTDS_TaxBracket[3]).toEqual(45353.75);
				});
				it("Tax on income  $0 to $186,350 + " + "33% Tax Rate should be applied for the income between $186,351 and $405,100", function(){
					expect(myTDS_TaxBracket[4]).toEqual(117541.25);
				});
				it("Tax on income  $0 to $405,100 + " + "35% Tax Rate should be applied for the income between $405,101 and $406,750", function(){
					expect(myTDS_TaxBracket[5]).toEqual(118118.75);
				});
				it("Tax on income  $0 to $406,750 + " + "39.6% Tax Rate should be applied for the income more than $406,750", function(){
					expect(Number($("#myEstimatedTax").html())).toEqual(132790.55);
				});
			});
		});
	});
});