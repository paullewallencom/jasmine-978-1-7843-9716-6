function Currency(region) {
	this.region = region;
	switch (this.region) {
		case "INDIA" :	
			this.currency = "INR";
					break;
		case "UK" :	
			this.currency =  "UK£";
			break;
		case "US" :	
			this.currency =  "US$";
			break;

	};
};