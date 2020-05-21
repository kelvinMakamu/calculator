let addNumbers = (firstNumber, secondNumber) => {
	return firstNumber + secondNumber;
}

number1=parseInt(prompt("Enter a number: "));
number2=parseInt(prompt("Enter another number: "));

totalNumberSum=addNumbers(number1,number2);

alert(totalNumberSum);