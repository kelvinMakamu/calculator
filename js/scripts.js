let addNumbers = (firstNumber, secondNumber) => {
	return firstNumber + secondNumber;
}

let calculateBMI = (height,weight) => {
	return  weight/Math.pow(height,2);
}

let convertTemperature = (convertTo,temperatureValue) =>{
	if(convertTo === "C"){
		convertedTemperature=temperatureValue+" converted into Celsius is: "+((temperatureValue - 32)/1.8).toFixed(2);
	}else if(convertTo === "F"){
		convertedTemperature=temperatureValue+" converted into Fahrenheit is: "+((temperatureValue * 1.8) + 32).toFixed(2);
	}else{
		convertedTemperature="BAD METRIC";
	}
	return convertedTemperature;
}
/******************
	Adding Two Numbers
**********************/
number1=parseInt(prompt("Enter a number: "));
number2=parseInt(prompt("Enter another number: "));
totalNumberSum=addNumbers(number1,number2);
alert(totalNumberSum);
/********************
	Convert Temperature
***********************/
metric=prompt("Please enter the conversion metric.\n\n C:\t Celsius \n\n F:\t Fahrenheit\n\n");
tempValue=parseFloat(prompt("Please enter the temperature value\n\n to convert (Digits Only)\n\n"));
tempConverted=convertTemperature(metric.toUpperCase(),tempValue);
if(tempConverted === "BAD METRIC"){
	tempOutputMessage= "\tOPERATION FAILED. \n\nInvalid conversion metric provided.\n\nEnter C for celsius and F for Fahrenheit\n\n";
}else{
	tempOutputMessage= tempConverted;
}
alert(tempOutputMessage);
