describe("JavaScript Timeout Functions", function() {
	var mytimerCallback;
	beforeEach(function() {
		mytimerCallback = jasmine.createSpy("mytimerCallback");
		jasmine.clock().install();
	});
	afterEach(function() {
		jasmine.clock().uninstall();
	});
	describe("With setTimeout() Method:", function(){
		it("should be called synchronously using Jasmin Clock", function() {
			setTimeout(function() {
				mytimerCallback();
			}, 100);
			expect(mytimerCallback).not.toHaveBeenCalled();
			jasmine.clock().tick(100);
			expect(mytimerCallback).toHaveBeenCalled();
		});		
	});
	describe("With setInterval() Method:", function(){
		it("should be called synchronously using Jasmin Clock", function() {
			setInterval(function() {
				mytimerCallback();
			}, 100);
			expect(mytimerCallback).not.toHaveBeenCalled();
			jasmine.clock().tick(101);
			expect(mytimerCallback.calls.count()).toEqual(1);
			jasmine.clock().tick(50);
			expect(mytimerCallback.calls.count()).toEqual(1);
			jasmine.clock().tick(50);
			expect(mytimerCallback.calls.count()).toEqual(2);
			jasmine.clock().tick(100);
			expect(mytimerCallback.calls.count()).toEqual(3);
		});		
	});
});