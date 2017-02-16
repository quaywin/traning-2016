function checkOddEven(num){
    if(num % 2 === 0){
        console.log(num + " is even");
    }else{
        console.log(num + " is odd");
    }
}

for(i = 0; i <= 15; i++){
    checkOddEven(i);
}