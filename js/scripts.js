let addNumbers = (firstNumber, secondNumber) => {
	return firstNumber + secondNumber;
}

let calculateBMI = (height,weight) => {
	return  weight/Math.pow(height,2);
}

let convertTemperature = (convertTo,temperatureValue) =>{
	if(convertTo === "C"){
		convertedTemperature=temperatureValue "converted into Celsius is: "+((temperatureValue - 32)/1.8);
	}else if(convertTo === "F"){
		convertedTemperature=temperatureValue "converted into Celsius is: "+((temperatureValue * 1.8) + 32);
	}else{
		convertTemperature="BAD METRIC";
	}
	return convertTemperature;
}
/******************
	Adding Two Numbers
**********************/
// number1=parseInt(prompt("Enter a number: "));
// number2=parseInt(prompt("Enter another number: "));
// totalNumberSum=addNumbers(number1,number2);
// alert(totalNumberSum);
/********************
	Convert Temperature
***********************/
metric=prompt("Please enter the conversion metric. C for Celsius and F for Fahrenheit");
tempValue=parseFloat(prompt("Please enter the temperature value to convert"));
tempConverted=convertTemperature(metric.toUpperCase(),tempValue);
if(tempConverted === "BAD METRIC"){
	tempOutputMessage= "Operation Failed. Invalid conversion metric provided.Enter C for celsius and F for Fahrenheit";
}else{
	tempOutputMessage= tempConverted;
}
alert(tempOutputMessage);
