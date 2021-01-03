var myTDS_TaxBracket = []; //Define variable to hold values of tax as per US Tax Brackets	
function getTaxDetails(){
	//Define variables to collects details
	var myTaxFilingStatus, myGrossIncome, myIRAContribution, myStandardDeduction, myExemptions, myDependent;
	var myTax=0; //Variable to hold the value of estimated tax
	myTaxFilingStatus = $("#taxFilingStatusID").val();
	if ($("#taxGrossIncomeID").val() > 0) {
		myGrossIncome = $("#taxGrossIncomeID").val();
	}
	else {
		myGrossIncome = 0;
	}
	//Get IRA Contribution
	if ($("#taxIRAID").val() > 0) {
		myIRAContribution = $("#taxIRAID").val();
		myGrossIncome = myGrossIncome - Number(myIRAContribution);
		$("#myAdjustedGrossIncome").html(myGrossIncome);
	}
	else {
		myIRAContribution = 0;
	}
	if (myTaxFilingStatus != null) {
		myStandardDeduction= getStandardDeduction(myTaxFilingStatus);
		myGrossIncome = myGrossIncome - myStandardDeduction;
	}
	else {
		myStandardDeduction= 0;
	}
	$("#myTaxableIncome").html(myGrossIncome);
	myTax= calculateTDS(myGrossIncome);
	$("#myEstimatedTax").html(myTax);
};
function getStandardDeduction(myTaxFilingStatus)
{
	var myStandardDeduction = 6200;
	return myStandardDeduction;
};
function calculateTDS(myGrossIncome)
{
	var myCalculatedTax = 0; //Declare a variable to hold the value of estimated tax
	//Start - Calculate TDS for the Tax Bracket 0 - $9,225
	if (myGrossIncome >= 9075) { //Calculation Corresponding to tax bracket 0 - $9,075
		myTDS_TaxBracket[0] = 9075 *(10/100);
		myCalculatedTax = myCalculatedTax + myTDS_TaxBracket[0];
	}
	else { //Calculate TDS if gross income is <$9,075
		myTDS_TaxBracket[0] = myGrossIncome*(10/100);
		myCalculatedTax = myCalculatedTax + myTDS_TaxBracket[0];
		return myCalculatedTax;
	};//End - Calculate TDS for the Tax Bracket 0 - $9,225
	//Start - Calculation Corresponding to tax bracket $9,075 - $36,900
	if (myGrossIncome >= 36900) {
		myTDS_TaxBracket[1] = myTDS_TaxBracket[0] + (36900-9075) *(15/100);
		myCalculatedTax = myTDS_TaxBracket[1];
	}
	else { //Calculate TDS if gross income is >$9,225 and <37450
		myTDS_TaxBracket[1] = myTDS_TaxBracket[0]+(myGrossIncome-9075)*(15/100);
		myCalculatedTax = myTDS_TaxBracket[1];
		return myCalculatedTax;
	};//End - Calculate TDS for the Tax Bracket $9,075 - $36,900
	//Start - Calculation Corresponding to tax bracket $36,901 - $89,350
	if (myGrossIncome >= 89350) {
		myTDS_TaxBracket[2] = myTDS_TaxBracket[1] + (89350-36900) *(25/100);
		myCalculatedTax = myTDS_TaxBracket[2];
	}
	else { //Calculate TDS if gross income is >$36,900 and <$89,350
		myTDS_TaxBracket[2] = myTDS_TaxBracket[1]+(myGrossIncome-36900)*(25/100);
		myCalculatedTax = myTDS_TaxBracket[2];
		return myCalculatedTax;
	};//End - Calculate TDS for the Tax Bracket $36,901 - $89,350	
	//Start - Calculation Corresponding to tax bracket $89,351 - $186,350
	if (myGrossIncome >= 186350) {
		myTDS_TaxBracket[3] = myTDS_TaxBracket[2] + (186350-89350) *(28/100);
		myCalculatedTax = myTDS_TaxBracket[3];
	}
	else { //Calculate TDS if gross income is >$89,350 and <$186,350
		myTDS_TaxBracket[3] = myTDS_TaxBracket[2]+(myGrossIncome-89350)*(28/100);
		myCalculatedTax = myTDS_TaxBracket[3];
		return myCalculatedTax;
	};//End - Calculate TDS for the Tax Bracket $89,351 - $186,350
	//Start - Calculation Corresponding to tax bracket $186,351 - $405,100
	if (myGrossIncome >= 405100) {
		myTDS_TaxBracket[4] = myTDS_TaxBracket[3] + (405100-186350)*(33/100);
		myCalculatedTax = myTDS_TaxBracket[4];
	}
	else { //Calculate TDS if gross income is >$186,350 and <$405,100
		myTDS_TaxBracket[4] = myTDS_TaxBracket[3]+(myGrossIncome-186350)*(33/100);
		myCalculatedTax = myTDS_TaxBracket[4];
		return myCalculatedTax;
	};//End - Calculate TDS for the Tax Bracket $186,351 - $405,100
	//Start - Calculation Corresponding to tax bracket $405,101 - $406,750
	if (myGrossIncome >= 406750) {
		myTDS_TaxBracket[5] = myTDS_TaxBracket[4] + (406750-405100)*(35/100);
		myCalculatedTax = myTDS_TaxBracket[5];
	}
	else { //Calculate TDS if gross income is >$405,100 and <$406,750
		myTDS_TaxBracket[5] = myTDS_TaxBracket[4]+(myGrossIncome-405100)*(35/100);
		myCalculatedTax = myTDS_TaxBracket[5];
		return myCalculatedTax;
	};//End - Calculate TDS for the Tax Bracket $186,351 - $405,100
	//Start - Calculation Corresponding to tax bracket if gross income >$406,750
	if (myGrossIncome >406750) {
		myTDS_TaxBracket[6] = myTDS_TaxBracket[5] + (myGrossIncome-406750)*(39.6/100);
		myCalculatedTax = myTDS_TaxBracket[6];
	}//End
	return myCalculatedTax;
};