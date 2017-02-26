var sum = 0;
for(var i = 3; i < 1000; i++){
    if(i % 3 == 0 || i % 5 == 0){
        console.log(i + "  ");
        sum += i;
    }
}
console.log("Sum the multiples of 3 and 5 under 1000 is " + sum);