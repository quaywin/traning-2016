var number1 = window.prompt("Input number 1 : ");
var number2 = window.prompt("Input number 2 : ");
var number3 = window.prompt("Input number 3 : ");

var num1 = parseInt(number1, 10);
var num2 = parseInt(number2, 10);
var num3 = parseInt(number3, 10);

var arr = [num1, num2, num3];
arr.sort();
arr.reverse();
console.log(arr);