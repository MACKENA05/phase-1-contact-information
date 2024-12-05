//FIRST CLASS FUNCTIONS

//1. Assign a function to a variable
 
let greet = function(name){
  return `Hello, ${name}`;
}
console.log(greet('Monicah'));   //call using the variable name

//2.Callback functions

function add (a,b){
    return a+b;
}
function displayResult(callback){
    return callback
}