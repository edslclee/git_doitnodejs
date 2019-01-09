// The callback method
function meaningOfLife(){
	console.log("The meaning of life is: 42");
}

// A method which accepts a callback method as an argument
// takes a function reference to be executed when printANumber completes

function printANumber(number, callbackFunction){
	console.log("The number you provided is: " + number);
};
// Driver method
printANumber(6, meaningOfLife);
