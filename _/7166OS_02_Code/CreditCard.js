function validateCreditCardNumber(number) {
	return (number.replace(/-/g, "").length === 16);
};