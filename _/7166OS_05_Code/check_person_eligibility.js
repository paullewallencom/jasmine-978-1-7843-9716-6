var Person = function(name, DOB, bloodgroup, donor_receiver) { 
    this.myName = name || "Larry Page";
	this.myDOB = DOB || "10/25/1990";
	this.myBloodGroup = bloodgroup || "B-";
	this.donor_receiver = donor_receiver;
	this.ValidateAge    = function(myDOB){ 
    	this.myDOB = myDOB || DOB;
    	return this.getAge(this.myDOB);
    };
    this.ValidateHIV    = function(personName,personDOB,personBloodGroup){ 
    	this.myName = personName || this.myName;
    	this.myDOB = personDOB || this.myDOB;
    	this.myBloodGroup = personBloodGroup || this.myBloodGroup;
    	return this.checkHIV(this.myName, this.myDOB, this.myBloodGroup);
    };
    this.ValidateBloodGroup    = function(callback){
    	var _this = this;
    	var matchBloodGroup;
		this.MatchBloodGroupToGiveReceive(function (personBloodGroup) {
			_this.personBloodGroup = personBloodGroup;
			matchBloodGroup = personBloodGroup;
			callback.call(_this, _this.personBloodGroup);
		});
		return matchBloodGroup;
    };    
};
Person.prototype.getAge = function(birth){ 
	console.log("getAge() function is called");
	var calculatedAge=0;
	// Logic to calculate person's age will be implemented later

	if (calculatedAge<18) {
		throw new ValidationError("Person must be 18 years or older");	
	};
	return calculatedAge;
};
Person.prototype.checkHIV = function(pName, pDOB, pBloodGroup){ 
	console.log("checkHIV() function is called");
	bolHIVResult=true;
	// Logic to verify HIV+ will be implemented later

	if (bolHIVResult == true) {
		throw new ValidationError("A person is infected with HIV+");		
	};
	return bolHIVResult;	
};
Person.prototype.MatchBloodGroupToGiveReceive = function(callback){
	var matchBloodGroup;
	if (this.donor_receiver == null || this.donor_receiver == undefined){
		throw new ValidationError("Argument (donor_receiver) is missing ");
	};
	if (this.myBloodGroup == "O+" && this.donor_receiver.toUpperCase() == "RECEIVER"){
		matchBloodGroup = ["O+"];
	}else if (this.myBloodGroup == "O+" && this.donor_receiver.toUpperCase() == "DONOR"){
		matchBloodGroup = ["A+"];
	}else if (this.myBloodGroup == "B-" && this.donor_receiver.toUpperCase() == "RECEIVER"){
	matchBloodGroup = ["B-", "O-"];
	};
	callback.call(this, matchBloodGroup);
};
// Define custom error for validation
function ValidationError(message) {
  this.message = message;
}
ValidationError.prototype = Object.create(Error.prototype);