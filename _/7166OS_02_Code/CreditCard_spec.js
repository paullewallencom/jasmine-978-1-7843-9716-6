describe("Credit Card Division of a Bank: ",function() {
	describe("Accept Credit Card Number for Master Card Category",function(){
		it("-should be having 16 numerical digits", function() {
			expect(validateCreditCardNumber("9999-9999-9999-9999")).toBeTruthy();
		});		
	});
});