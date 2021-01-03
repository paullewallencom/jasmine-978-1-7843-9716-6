describe("Jasmine Specs for Asynchronous Operations: ", function() {
	//Scenario -1
	describe("With Done() function: ", function(){
    	var myCallback, showErrorMessage;
		beforeEach(function(done) {
			myCallback = jasmine.createSpy();
	    	$.ajax({
	            url: "spec/fixtures/myData.json",
	            dataType: "json",
	            success: function(responseResult) {
	            	myCallback(responseResult);
	            	done();
	            },
	            error: showErrorMessage,
	            timeout: 5000
	    	});
		});
		it("should support JavaScript " +
				"asynchronous operations", function() {
			expect(myCallback).toHaveBeenCalled();
		});
	});
});