// functions.js
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

function sayHello(name = "Will") {
  greet1 = "Hi there " + name + "!";
  greet2 = "No more testing Will!";
  if(name === "Will") {
    return greet2;
  }
  return greet1;

}

function buildCar(color, type) {
  if(!color && !type){
    return{};
  } else {
  return {color, type};
  }
}

var color = buildCar("red");
var type = buildCar("truck");


module.exports={
  addTwoNumbers: addTwoNumbers,
  sayHello: sayHello,
  buildCar: buildCar,
}
