function Deposit(Frequency) {
	this.Type= Frequency;
};

Deposit.prototype.BankDeposit = function(){
	switch (this.Type) {
	case "FIX" :	
				return "FD";
				break;
	case "RECURRING" :	
				return "RD";
				break;
	};
};