function isPrimeNum(num){
    if(num <1)
        return false;
    else{
        for(var i=2;i<num;i++)
            if(num%i===0)
                return false;
        return true;
    }
}
console.log(isPrimeNum(7));
console.log(isPrimeNum(4));