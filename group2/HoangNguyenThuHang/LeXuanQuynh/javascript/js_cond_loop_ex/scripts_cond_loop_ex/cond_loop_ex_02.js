var number1, number2, number3;
number1 = prompt("Input the firt number");
number2 = prompt("Input the second number");
number3 = prompt("Input the third number");

if((number1 >= 0 && number2 >= 0 && number3 >= 0)
    ||(number1 < 0 && number2 < 0 && number3 >= 0) 
    || (number1 < 0 && number2 >= 0 && number3 < 0) 
    || (number1 >= 0 && number2 < 0 && number3 < 0)){
        
    alert("The sign is + ");
}
else{
    alert("The sign is - ");
}