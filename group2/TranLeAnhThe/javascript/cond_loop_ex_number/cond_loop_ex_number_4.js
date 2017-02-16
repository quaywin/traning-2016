var number1 = window.prompt("Input number 1 : ");
var number2 = window.prompt("Input number 2 : ");
var number3 = window.prompt("Input number 3 : ");
var number4 = window.prompt("Input number 4 : ");
var number5 = window.prompt("Input number 5 : ");

var num1 = parseInt(number1, 10);
var num2 = parseInt(number2, 10);
var num3 = parseInt(number3, 10);
var num4 = parseInt(number4, 10);
var num5 = parseInt(number5, 10);

function max2(a, b){
    return a >= b ? a : b;
}

var max = max2(num1, num2);
max = max2(max, num3);
max = max2(max, num4);
max = max2(max, num5);
console.log(max);