function reverse(num){
    var temp=0;
    while(num>0){
        temp=temp*10+ num%10;
        num = Math.floor(num/10);
    }
    return temp;
}
console.log(reverse(32243));