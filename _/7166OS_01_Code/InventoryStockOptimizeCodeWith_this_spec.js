describe("Inventory Stock", function() {
	beforeEach(function() {
		  this.stockinhand_item1=11, this.item1 = 1;
		  console.log("beforeEach: Stock in hand for item1 before spec execution = " + this.stockinhand_item1);		  
	  });
	afterEach(function() {
		  this.stockinhand_item1=0, this.item1 = 0;
		  console.log("afterEach: Stock in hand for item1 once spec executed = " + this.stockinhand_item1);
	  });
	//Scenario - 1
	it("Inventory Stock should be updated on sale of an item", function() {		
			this.transactionType = "SALE";
			expect(this.stockinhand_item1-this.item1).toEqual(10);
			expect(this.transactionType).toBeDefined();
	  });
	  it("Inventory Stock should be updated on issue of an item within organization", function() {
		  	expect(this.stockinhand_item1-this.item1).toEqual(10);
			expect(this.transactionType).toBeUndefined();
	  });
	  //Scenario - 2
	  it("Inventory Stock should be updated on return of an item", function() {
		  	expect(this.stockinhand_item1+this.item1).toEqual(12);
			expect(this.transactionType).toBe(undefined);
	  });
	  //Scenario - 3
	  it("Inventory Stock should be updated on receiving or procuring new item", function() {
		  	expect(this.stockinhand_item1+this.item1).toEqual(12);
			expect(this.transactionType).toBeUndefined();
	  });
});


