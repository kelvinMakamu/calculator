let addNumbers = (firstNumber, secondNumber) => {
	return firstNumber + secondNumber;
}

let subtractNumbers = (firstNumber, secondNumber) => {
	return firstNumber - secondNumber;
}

let multiplyNumbers = (firstNumber, secondNumber) => {
	return firstNumber * secondNumber;
}

let divideNumbers = (firstNumber, secondNumber) => {
	if(secondNumber === 0){
		return 0;
	}else{
		return firstNumber/secondNumber;
	}
}
//User Interface Logic
$(document).ready(() => {
	$("#add").submit((event)=> {
		event.preventDefault();
		let firstNumber=parseInt($("#add1").val());
		let secondNumber=parseInt($("#add2").val());
		$("#add-output").text(addNumbers(firstNumber,secondNumber)).fadeIn();
	});

	$("#subtract").submit((event)=> {
		event.preventDefault();
		let firstNumber=parseInt($("#subtract1").val());
		let secondNumber=parseInt($("#subtract2").val());
		$("#subtract-output").text(subtractNumbers(firstNumber,secondNumber)).fadeIn();
	});

	$("#multiply").submit((event)=> {
		event.preventDefault();
		let firstNumber=parseInt($("#multiply1").val());
		let secondNumber=parseInt($("#multiply2").val());
		$("#multiply-output").text(multiplyNumbers(firstNumber,secondNumber)).fadeIn();
	});

	$("#divide").submit((event)=> {
		event.preventDefault();
		let firstNumber=parseInt($("#divide1").val());
		let secondNumber=parseInt($("#divide2").val());
		$("#divide-output").text(divideNumbers(firstNumber,secondNumber)).fadeIn();
	});
});
// let calculateBMI = (height,weight) => {
// 	return  weight/Math.pow(height,2);
// }

// let convertTemperature = (convertTo,temperatureValue) =>{
// 	if(convertTo === "C"){
// 		convertedTemperature=temperatureValue+" converted into Celsius is: "+((temperatureValue - 32)/1.8).toFixed(2);
// 	}else if(convertTo === "F"){
// 		convertedTemperature=temperatureValue+" converted into Fahrenheit is: "+((temperatureValue * 1.8) + 32).toFixed(2);
// 	}else{
// 		convertedTemperature="BAD METRIC";
// 	}
// 	return convertedTemperature;
// }

// let evenNumberCalculator = (number) =>{
// 	if(number%2 == 0){
// 		alert(number+" is an even number");
// 	}else{
// 		alert(number+" is an odd number");
// 	}
// }

// let cafeReloaded = (drinkType) =>{
// 	if(drinkType === "C"){
// 		drink=drinkType.toLowerCase();
// 	}else{
// 		drink=drinkType.toLowerCase();
// 	}
// 	burger=prompt("What food would you like to be served\?");
// 	anythingElse=prompt("Here is some "+burger.toLowerCase()+" for you. Anything else\?");
// 	if(anythingElse.toUpperCase() === "NO"){
// 		alert("Thanks you for choosing us");
// 	}else if(anythingElse.toUpperCase() === "YES"){
// 		alert("Enjoy Your evening. We are not serving anything else.\nThanks you for choosing us.");
// 	}
// }

// orderedDrink=prompt("\n\nWhat would you like to Order\?\n\nT\t TEA\n\nC\tCOFFEE");
// cafeReloaded(orderedDrink);

// let grader= (mark) => {
// 	if(mark>79 && mark<=100){
// 		alert("Grade: A");
// 	}else if(mark>59 && mark<=79){
// 		alert("Grade: B");
// 	}else if(mark>39 && mark<=59){
// 		alert("Grade: C");
// 	}else if(mark>19 && mark<=39){
// 		alert("Grade: D");
// 	}else if(mark>0 && mark<=19){
// 		alert("Grade: E");
// 	}else{
// 		alert("\tOPERATION FAILED.\n\nThe mark provided should be greater than zero(0)\n and less than or equal to 100");
// 	}
// }

// let weatherApp = (temperature, isRaining) => {
// 	if (temperature < 0) {
//     alert("Dress Warmly!");
//   }else if (temperature < 15 && isRaining === true) {
//    	alert("Wear a jacket!");
//   }else if (temperature < 25) {
//    	alert("wear a shirt");
//   }else {
//    	alert("Wear a short and a vest");
//   }
// }
// // temperatureValue=parseInt(prompt("\n\nWhat\'s the current temperatiure \?\n\n"));
// // confirmRaining=confirm("\n\nIs it raining today?\n\n");
// // weatherApp(temperatureValue,confirmRaining);
// /******************
// 	Adding Two Numbers
// **********************/
// firstNumeral=parseInt(prompt("\n\nEnter the first number: \n\n"));
// secondNumeral=parseInt(prompt("\n\nEnter the second number: \n\n"));
// totalNumberSum=addNumbers(firstNumeral,secondNumeral);
// totalSumMessage="The total sum is: "+totalNumberSum;
// alert(totalSumMessage);
// /********************
// 	Calculating BMI
// ***********************/
// userHeight=parseFloat(prompt("\n\nPlease enter height in metres(m): \n\n"));
// userWeight=parseFloat(prompt("\n\nPlease enter weight in kilograms(Kgs): \n\n "));
// userBMI=calculateBMI(userHeight,userWeight);
// userBMIMessage="The BMI of the user is: "+userBMI;
// alert(userBMIMessage);
// /********************
// 	Convert Temperature
// ***********************/
// metric=prompt("Please enter the conversion metric.\n\n C:\t Celsius \n\n F:\t Fahrenheit\n\n");
// tempValue=parseFloat(prompt("Please enter the temperature value\n\n to convert (Digits Only)\n\n"));
// tempConverted=convertTemperature(metric.toUpperCase(),tempValue);
// if(tempConverted === "BAD METRIC"){
// 	tempOutputMessage= "\tOPERATION FAILED. \n\nInvalid conversion metric provided.\n\nEnter C for celsius and F for Fahrenheit\n\n";
// }else{
// 	tempOutputMessage= tempConverted;
// }
// alert(tempOutputMessage);
// let personalityQuiz= (isIntrovert, isOutgoing) =>{
// 	if(isIntrovert === "" || isOutgoing === ""){
// 		alert("You have to answer both questions for personality check.");
// 	}else{

// 		if(isIntrovert === "I" && isOutgoing === "IN"){
// 			alert("CAT");
// 		} 

// 		if(isIntrovert === "I" && isOutgoing === "OUT"){
// 			alert("NEITHER");
// 		}

// 		if(isIntrovert === "E" && isOutgoing === "IN"){
// 			alert("BOTH");
// 		}

// 		if(isIntrovert === "E" && isOutgoing === "OUT"){
// 			alert("DOG");
// 		}
		
// 	}
// }

// checkIntrovert=prompt("Are you an introvert or extrovert\?\n\n\nI\tIntrovert\n\nE\tExtrovert");
// checkOutgoing=prompt("Are you an indoors or outdoors person\?\n\nIN\tIndoors\n\nOUT\tOutdoors");

// personalityQuiz(checkIntrovert.toUpperCase(),checkOutgoing.toUpperCase());