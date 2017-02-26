var a, b, c, d;
a = prompt("Input a");
b = prompt("Input b");
c = prompt("Input c");
d = prompt("Input d");
e = prompt("Input e");

if(a > b && a > c && a > d && a > e){
    alert("The largest of five numbers is " + a);
}
else if(b > a && b > c && b > d && b > e ){
    alert("The largest of five numbers is " + b);
}
else if(c > a && c > b && c > d && c > e){
     alert("The largest of five numbers is " + c);
}
else if(d > a && d > b && d > c && d > e){
     alert("The largest of five numbers is " + d);
}
else{
     alert("The largest of five numbers is " + e);
}
