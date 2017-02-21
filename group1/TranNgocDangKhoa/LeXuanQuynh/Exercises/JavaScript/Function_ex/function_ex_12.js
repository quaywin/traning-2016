function isPerfectNum(num){
    var temp= 0;
    for(var i=1; i<num;i++){
        if(num%i===0)
            temp+=i;
    }
    if(temp===num && (temp+num)/2 ===num)
        return true;
    else
        return false;
}
console.log(isPerfectNum(5));
console.log(isPerfectNum(6));
console.log(isPerfectNum(28));
console.log(isPerfectNum(15));
console.log(isPerfectNum(496));