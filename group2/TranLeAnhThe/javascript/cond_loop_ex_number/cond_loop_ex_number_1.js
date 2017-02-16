var number1 = window.prompt("Input number 1 : ");
var number2 = window.prompt("Input number 2 : ");

if (parseInt(number1, 10) > parseInt(number2, 10)) {
    console.log("number " + number1 + " > " + " number " + number2);
} else {
    if (parseInt(number1, 10) < parseInt(number2, 10)) {
        console.log("number " + number1 + " < " + " number " + number2);
    } else {
        console.log("number " + number1 + " = " + " number " + number2);
    }
}