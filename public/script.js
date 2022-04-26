var guess;
var lessguess=0;//the last less-guess 
var highguess=0;//the last high-guess

var message ='';

window.onload = function() {
	guess = Math.floor(Math.random()*100);
	message = document.getElementById("message");
	console.log("guess = " + guess);
}

function startGame() {
	let  gnumber = document.getElementById("gnumber").value; //get the inserted guess number/value
	let isnumber = isNumber(gnumber); // check if the input value is a number and between 1- 100
	
	
	if(!isnumber) {

		return false;
	}

	
	if(gnumber!=guess) {  

		if(gnumber<guess){

				if(lessguess==0 || Number(lessguess)<Number(gnumber)||lessguess==gnumber){
					lessguess = gnumber;   //set lessguess as nearest smaller number
					message.innerHTML = "number is small try againg";
				}else{
					message.innerHTML = "don't put less than "+lessguess;

				} 
				
		}else {
		
				if(highguess==0 || Number(highguess)>Number(gnumber) || highguess==gnumber){
					highguess = gnumber;//set highguess as nearest bigger number
					message.innerHTML = "number is high try again";

				} else{
					message.innerHTML = "don't put more than "+highguess;

				}
				
		}
	} else {
		message.innerHTML = "CORRECT the guess is "+guess+" and your input is "+gnumber;
	}
}

/*
	check if the input is a number and if it is between 1-100
*/
function isNumber(number) {
	
	if (isNaN(number) || number < 1 || number > 100) {
			message.innerHTML = "please enter number between 1 and  100";
			return false;
	} else{
		return true;
	}
	
}