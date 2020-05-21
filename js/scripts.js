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
firstNumeral=parseInt(prompt("\n\nEnter the first number: \n\n"));
secondNumeral=parseInt(prompt("\n\nEnter the second number: \n\n"));
totalNumberSum=addNumbers(firstNumeral,secondNumeral);
totalSumMessage="The total sum is: "+totalNumberSum;
alert(totalSumMessage);
/********************
	Calculating BMI
***********************/
userHeight=parseFloat(prompt("\n\nPlease enter height in metres(m): \n\n"));
userWeight=parseFloat(prompt("\n\nPlease enter weight in kilograms(Kgs): \n\n "));
userBMI=calculateBMI(userHeight,userWeight);
userBMIMessage="The BMI of the user is: "+userBMI;
alert(userBMIMessage);
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