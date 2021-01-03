describe("Employee of <ABC> Inc:",function(){
	describe("Tax Estimation:",function(){
		describe("Category: Single Taxpayer",function(){
			//Scenario-1
			describe("When: Taxable income is $111,200: ",function(){
				it("standard deduction should be applied", function(){
				});
				it("10% Tax Rate should be applied for the income between $0 and $9,075", function(){
				});
				it("Tax on income  $0 to $9,075 + " + "15% Tax Rate should be applied for the income between $9,076 and $36,900", function(){
				});
				it("Tax on income  $0 to $36,900 + " + "25% Tax Rate should be applied for the income between $36,901 and $89,350", function(){
				});
				it("Tax on income  $0 to $89,350 + " + "28% Tax Rate should be applied for the income between $89,351 and $186,350", function(){
				});
			});
			//Scenario-2
			describe("When: Taxable income is $450,000: ",function(){
				it("standard deduction should be applied ", function(){
				});
				it("10% Tax Rate should be applied for the income between $0 and $9,075", function(){
				});
				it("Tax on income  $0 to $9,075 + " + "15% Tax Rate should be applied for the income between $9,076 and $36,900", function(){
				});
				it("Tax on income  $0 to $36,900 + " + "25% Tax Rate should be applied for the income between $36,901 and $89,350", function(){
				});
				it("Tax on income  $0 to $89,350 + " + "28% Tax Rate should be applied for the income between $89,351 and $186,350", function(){
				});
				it("Tax on income  $0 to $186,350 + " + "33% Tax Rate should be applied for the income between $186,351 and $405,100", function(){
				});
				it("Tax on income  $0 to $405,100 + " + "35% Tax Rate should be applied for the income between $405,101 and $406,750", function(){
				});
				it("Tax on income  $0 to $406,750 + " + "39.6% Tax Rate should be applied for the income more than $406,750", function(){
				});
			});
		});
	});
});