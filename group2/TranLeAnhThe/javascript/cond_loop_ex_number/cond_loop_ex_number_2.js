var number1 = window.prompt("Input number 1 : ");
var number2 = window.prompt("Input number 2 : ");
var number3 = window.prompt("Input number 3 : ");

if((parseInt(number1, 10) * parseInt(number2, 10) *parseInt(number3, 10)) > 0){
     console.log("+");
}else{
    console.log("-");
}