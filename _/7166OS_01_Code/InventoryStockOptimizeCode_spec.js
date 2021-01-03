describe("Inventory Stock", function() {
	var stockinhand_item1, item1;
	beforeEach(function() {
		stockinhand_item1=11, item1 = 1;
		console.log("beforeEach: Stock in hand for item1 before spec execution = " + stockinhand_item1);
	  });
	afterEach(function() {
		stockinhand_item1=0, item1 = 0;
		console.log("afterEach: Stock in hand for item1 once spec executed = " + stockinhand_item1);
	  });
	//Scenario - 1
	it("Inventory Stock should be updated on sale of an item", function() {		
			expect(stockinhand_item1-item1).toEqual(10);
	  });
	  it("Inventory Stock should be updated on issue of an item within organization", function() {
		  	expect(stockinhand_item1-item1).toEqual(10);
	  });
	  //Scenario - 2
	  it("Inventory Stock should be updated on return of an item", function() {
		  	expect(stockinhand_item1+item1).toEqual(12);
	  });
	  //Scenario - 3
	  it("Inventory Stock should be updated on receiving or procuring new item", function() {
		  	expect(stockinhand_item1+item1).toEqual(12);
	  });
});
