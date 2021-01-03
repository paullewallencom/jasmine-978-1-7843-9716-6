describe("jQuery",function(){
	describe("Ajax Calls:", function(){
		var configurationData;
		beforeEach(function() {
			configurationData = { 
					url: "spec/fixtures/myData.json",
					remainingTime: 5000
			};
		});		
		describe("with $.ajax", function(){
			//Scenario -1
			it("Correct URL should be passed to $.ajax object", function(){
				spyOn($, "ajax");
				sendRequestWithJQuery(undefined, undefined, configurationData);
				expect($.ajax).toHaveBeenCalledWith(jasmine.objectContaining({url: configurationData.url}));
			});
			//Scenario -2
			it("Method 'myCallback' should be called on successful response", function(){
		        spyOn($, "ajax").and.callFake(function(e) {
		            e.success({});
		        });
		    	var myCallback, showErrorMessage;
		    	myCallback = jasmine.createSpy();
		    	showErrorMessage = jasmine.createSpy();
		        sendRequestWithJQuery(myCallback,showErrorMessage, configurationData);
		        expect(myCallback).toHaveBeenCalled();
		        expect(showErrorMessage).not.toHaveBeenCalled();
			});
			//Scenario -3
			it("Method 'showErrorMessage' should be called for any malfunctioning", function(){
				spyOn($, "ajax").and.callFake(function(e) {
					e.error({});
				});
				showErrorMessage = jasmine.createSpy();
				sendRequestWithJQuery(myCallback,showErrorMessage, configurationData);
				expect(showErrorMessage).toHaveBeenCalled();
			});			
		});
		//Scenario -4
		describe("DOM Manipulation", function(){
			it("Test HTML Fixture", function(){
		        jasmine.getFixtures().fixturesPath = 'spec/fixtures';
		        loadFixtures('myfixture.html');
		        jasmine.getJSONFixtures().fixturesPath = 'spec/fixtures';
		        var FixtureUrl = "myData.json";
		        var fixtures = loadJSONFixtures(FixtureUrl);
		        var myResult = fixtures[FixtureUrl];
		    	spyOn($, "ajax").and.callFake(function(e) {
		            e.success(myResult);
		        });
		    	showErrorMessage = jasmine.createSpy();
		        sendRequestWithJQuery(myCallback,showErrorMessage, configurationData);
		    	expect($('#my-fixture')).toContainText(/Jasmine Cookbook by Munish Sethi/i);
			});
		});
	});	
});