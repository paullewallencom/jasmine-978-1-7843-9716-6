describe ("JavaScript Application:", function(){
	describe ("When Jasmine Specs designed with ", function(){
		describe("HTML Fixture: ", function(){
			beforeEach(function() {
		        jasmine.getFixtures().fixturesPath = 'spec/fixtures';
			});		
			describe("'loadFixtures' Method, ", function(){
				beforeEach(function() {
			        loadFixtures('HTML_Fixture.html');
				});		
				it("Load fixture from a file", function(){
			        expect($('.myULClass')).toExist();
			        expect($('#my-fixture')).toExist();
				});
			});
			describe("'readFixtures' Method, ", function(){
				var myFixture;
				beforeEach(function() {
			        myFixture = readFixtures('HTML_Fixture.html');
				});		
				it("Read fixture from a file", function(){
			        expect(myFixture).toContainText(/Munish/);
			        expect($(myFixture).find("li")).toHaveText(/Sethi/);
				});
			});
			describe("'setFixtures' Method, ", function(){
				beforeEach(function() {
			        setFixtures('<div class="FixtureCalss">Jasmine Cookbook</div>');
				});		
				it("Receive fixture as a parameter", function(){
			        expect($('.FixtureCalss')).toExist();
				});
			});		
		});
		describe("JSON Fixture: ", function(){
			var fixtureFile, fixtures, myResult;
			beforeEach(function() {
		        loadFixtures('HTML_Fixture.html');
		        jasmine.getJSONFixtures().fixturesPath = 'spec/fixtures';
		        fixtureFile = "myJSONData.json";
		        fixtures = loadJSONFixtures(fixtureFile);
		        myResult = fixtures[fixtureFile];
			});		
			it("Load JSON data from a file",function(){
				$('#my-fixture').html("Jasmine Cookbook");
		        expect($('#my-fixture')).toContainText("Jasmine Cookbook");
			});
		});		
	});	
});