var a, b, c;
a = prompt("Input a");
b = prompt("Input b");
c = prompt("Input c");

if(a >= b && a >= c){
    if(b >= c){
        alert(a + " " + b + " " + c);
    }
    else{
        alert(a + " " + c + " " + b);
    }
}
else if(b >= a && b >= c){
    if(a >= c){
        alert(b + " " + a + " " + c);
    }
    else{
        alert(b + " " + c + " " + a);
    }
}
else{
    if(a >= b){
        alert(c + " " + a + " " + b);
    }
    else{
        alert(c + " " + b + " " + a);
    }
}