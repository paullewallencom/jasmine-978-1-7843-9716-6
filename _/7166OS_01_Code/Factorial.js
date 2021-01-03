/* Description: Program to find factorial of a given number
 * Created By: Munish Sethi
 * Created Date: 16 Sep 2014
 * Parameters: Accept only one parameter as number and return its factorial value   
 * */
function factorial(num)
{
	if (num==1 && factorial.arguments.length == 1) {
		return 1;
	}
	else if (num >1 && factorial.arguments.length == 1) {
	  return num*factorial(num-1);
	}
	else {
		return null;  /* Validate if parameter is passed as negative number or 
		less/more that one parameter */
	} 
}
