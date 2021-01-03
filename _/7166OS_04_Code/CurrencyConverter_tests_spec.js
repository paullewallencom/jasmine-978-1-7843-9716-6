describe("<ABC> Money Exchange Company: Currency Converter Module, ", function() {
	describe("When Convert Currency Across Region: ", function(){
		it("Verify that Indian Rupees (INR) " +
				"converted to Us Dollars (USD)", function() {
			var myCurrency = new CurrencyConverter(60, "INR", "USD");
			expect(myCurrency.convertedCurrency()).toEqual(1.002);
		});
		it("Verify that Indian Rupees (INR) " +
				"converted to Japanese Yen (JPY)", function() {
			var myCurrency = new CurrencyConverter(1, "INR", "JPY");
			expect(myCurrency.convertedCurrency()).toEqual(1.7756);
		});	
		it("Verify that Hong Kong Dollars (HKD) " +
				"converted to US Dollars (USD)", function() {
			var myCurrency = new CurrencyConverter(1, "HKD", "USD");
			expect(myCurrency.convertedCurrency()).toEqual(0.1289);
		});
		it("Verify that Japanese Yen (JPY) " +
				"converted to US Dollars (USD)", function() {
			var myCurrency = new CurrencyConverter(1, "JPY", "USD");
			expect(myCurrency.convertedCurrency()).toEqual(0.54);
		});
		it("Verify that UAE Dirham (AED) " +
				"converted to US Dollars (USD)", function() {
			var myCurrency = new CurrencyConverter(1, "AED", "USD");
			expect(myCurrency.convertedCurrency()).toEqual(0.27);
		});
		it("Verify that British Pound Sterling (GBP) " +
				"converted to US Dollars (USD)", function() {
			var myCurrency = new CurrencyConverter(1, "GBP", "USD");
			expect(myCurrency.convertedCurrency()).toEqual(1.60);
		});
		it("Verify that South African Rand (ZAR) " +
				"converted to Indian Rupees (INR)", function() {
			var myCurrency = new CurrencyConverter(1, "ZAR", "INR");
			expect(myCurrency.convertedCurrency()).toEqual(5.560);
		});
		it("Verify that US Dollars (USD) " +
				"converted to Hong Kong Dollars (HKD)", function() {
			var myCurrency = new CurrencyConverter(1, "USD", "HKD");
			expect(myCurrency.convertedCurrency()).toEqual(7.750);
		});	
		it("Verify that US Dollars (USD) " +
				"converted to Japanese Yen (JPY)", function() {
			var myCurrency = new CurrencyConverter(1, "USD", "JPY");
			expect(myCurrency.convertedCurrency()).toEqual(112.81);
		});	
	});
});
