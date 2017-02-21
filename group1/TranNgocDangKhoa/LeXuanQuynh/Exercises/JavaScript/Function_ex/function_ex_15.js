function aPow(exponent,bases){
    var temp=1;
    for(var i=0;i<bases;i++){
        temp*=exponent;
    }
    return temp;
}
console.log(aPow(3,3));