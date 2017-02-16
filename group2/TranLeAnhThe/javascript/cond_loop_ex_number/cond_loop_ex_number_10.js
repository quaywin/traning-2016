var number1 = window.prompt("Input number  : ");
var n = parseInt(number1, 10);

for(var i = 0; i <= n; i++){
    var str = "";
    for(var j = 0; j <= i; j++){
        str += "*";
    }
    console.log(str);
}