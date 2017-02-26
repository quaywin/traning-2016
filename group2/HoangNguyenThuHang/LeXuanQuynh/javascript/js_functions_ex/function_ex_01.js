function reverseNumber(x){
    var result = 0;
    var str = x.toString();
    var len = x.toString().length;
    while(x != 0){     
        var temp = x % 10;
        len--;
        result += temp * Math.pow(10, len);
        x = parseInt(x / 10);
    }
    return result;
    //#
    // var str = n.toString();
	// var result = str.split("").reverse().join("");
    // return parseInt(result);
}

console.log(reverseNumber(32243));
