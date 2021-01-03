describe("<XYZ> Money Exchange Company: Currency Converter Module, ", function() {
	describe("When Convert the Currency Across Asian Countries: ", function(){
		it("Japanese Yen (JPY) should be converted " +
				"to Indian Rupee (INR) " +
				"with user defined exchange rate", function() {
			var myCurrency = new CurrencyConverter(1, "JPY", "INR",0.5500);
			expect(myCurrency.convertedCurrency()).toEqual(0.5500);
		});				
		it("Hong Kong Dollar (HKD) should be converted " +
				"to Indian Rupee (INR) with " +
				"user defined exchange rate", function() {
			var myCurrency = new CurrencyConverter(10000, "HKD", "INR",9.0);
			expect(myCurrency.convertedCurrency()).toEqual(90000);
		});
	});
});
