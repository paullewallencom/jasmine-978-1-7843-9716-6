describe("jasmine.any", function() {
	it("should be applied successfully for comparing arguments", function() {
	  	var mydate = new Date("11/20/2014"); // mm//dd/yyyy
		var myMobile = new MobilePhone("Samsung","White", 
				"8 Megapixels",mydate.toDateString(),
				["Android", "Lollipop","1.2 GHz Quad Core "]);
	    expect(myMobile).toEqual(jasmine.any(Object));
	    expect(myMobile.mobileRating()).toEqual(jasmine.any(String), jasmine.any(Array));
	    expect(12).toEqual(jasmine.any(Number));
	});
});
describe("jasmine.objectContaining", function() {
	it("should match/compare objects " +
			"corresponding to keys/values " +
			"pairs in the actual", function() {
		var mydate = new Date("11/20/2014"); // mm//dd/yyyy
		var myMobile = new MobilePhone("Samsung",
				"White", "8 Megapixels", 
				mydate.toDateString(), 
				["Android", "Lollipop","1.2 GHz Quad Core"]);
		expect(myMobile).toEqual(jasmine.objectContaining({
			brand: "Samsung",
			color: "White",
			primaryCamera: "8 Megapixels"
		}));
	});
	describe("when used with a spy", function(){
		it("should be applied successfully " +
				"for comparing arguments", function() {
	    	myMobile = jasmine.createSpy('myMobile');
	    	myMobile({
	            brand: "Samsung",
	            foo: "foo"
	          });
			expect(myMobile).toHaveBeenCalledWith(jasmine.objectContaining({
				brand: "Samsung",
				foo: "foo"
			}));
		});		
	});
});