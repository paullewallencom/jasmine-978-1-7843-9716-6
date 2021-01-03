describe("Ajax Calls: ", function(){
	describe("Validate Using 'jasmine-ajax' Plugin", function(){
		var request, myText, myCallback;
		beforeEach(function() {
			jasmine.Ajax.install();
			myCallback = jasmine.createSpy("success");
			ajaxRequest(myCallback);
			request = jasmine.Ajax.requests.mostRecent();
		});
		afterEach(function() {
			jasmine.Ajax.uninstall();
		});
		//Scenario -1
		it("Method 'GET' should be passed " +
				"through XMLHttpRequest request",function(){
			expect(request.method).toBe('GET');
			expect(myCallback).not.toHaveBeenCalled();
		});
		//Scenario -2
		it("url should be passed as " +
				"'/some/url/?q=Cookbook' through " +
				"XMLHttpRequest request",function(){
			expect(request.url).toBe('/some/url/?q=Cookbook');
			expect(myCallback).not.toHaveBeenCalled();
		});
		//Scenario -3
		it("myCallback should be called on " +
				"successful response",function(){
			myText = "Jasmine Cookbook";
			request.respondWith({
				"success": myCallback(myText)
			});
			expect(myCallback).toHaveBeenCalledWith("Jasmine Cookbook");
		});	
	});
});
