var number1, number2;
number1 = window.prompt("Input the firt interger");
number2 = window.prompt("Input the second interger");

if(number1 > number2) { 
  console.log("The larger of "+ number1 + " and "+ number2 + " is "+ number1 + ".");
 }   
else if(number2 > number1) {
    console.log("The larger of "+ number1 +" and "+ number2 + " is "+ number2 + ".");
  }                  
else{
    console.log("The values "+ number1 + " and "+ number2 + " are equal.");
  }