/********************
	
	BUSINESS LOGIC

***************************/
let numberWithCommas= (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

let addNumbers = (firstNumber, secondNumber) => {
	return numberWithCommas((firstNumber + secondNumber).toFixed(2));
}

let subtractNumbers = (firstNumber, secondNumber) => {
	return numberWithCommas((firstNumber - secondNumber).toFixed(2));
}

let multiplyNumbers = (firstNumber, secondNumber) => {
	return numberWithCommas((firstNumber * secondNumber).toFixed(2));
}

let divideNumbers = (firstNumber, secondNumber) => {
	if(secondNumber === 0){
		return 0;
	}else{
		return numberWithCommas((firstNumber/secondNumber).toFixed(2));
	}
}

/********************
	
	USER INTERFACE LOGIC

***************************/

$(document).ready(() => {
	$("#add").submit((event)=> {
		event.preventDefault();
		let firstNumber=parseFloat($("#add1").val());
		let secondNumber=parseFloat($("#add2").val());
		$("#add-output").text(addNumbers(firstNumber,secondNumber)).fadeIn();
	});

	$("#subtract").submit((event)=> {
		event.preventDefault();
		let firstNumber=parseFloat($("#subtract1").val());
		let secondNumber=parseFloat($("#subtract2").val());
		$("#subtract-output").text(subtractNumbers(firstNumber,secondNumber)).fadeIn();
	});

	$("#multiply").submit((event)=> {
		event.preventDefault();
		let firstNumber=parseFloat($("#multiply1").val());
		let secondNumber=parseFloat($("#multiply2").val());
		$("#multiply-output").text(multiplyNumbers(firstNumber,secondNumber)).fadeIn();
	});

	$("#divide").submit((event)=> {
		event.preventDefault();
		let firstNumber=parseFloat($("#divide1").val());
		let secondNumber=parseFloat($("#divide2").val());
		$("#divide-output").text(divideNumbers(firstNumber,secondNumber)).fadeIn();
	});
});