document.write("javaScript connected");

var firstNumber = parseInt(prompt("Enter the First Number: "));
var secondNumber = parseInt(prompt("Enter the Second Number: "));
var operator = prompt("Enter TheOperator");

if(operator == "+") {
    alert(firstNumber + secondNumber);
}else if(operator == "-") {
    alert(firstNumber - secondNumber);
}else if(operator == "*") {
    alert(firstNumber * secondNumber);
}else if (operator == "/") {
    alert(firstNumber / secondNumber);
}else if (operator == "%") {
    alert(firstNumber % secondNumber);
}else {
    alert("Sorry you have enter string")
}