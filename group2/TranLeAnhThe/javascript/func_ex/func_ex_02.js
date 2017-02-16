function isPalindrome(str){
    var len = str.length;
    for(var i = 0; i < parseInt(len/2); i++){
        if(str[i] !== str[len - i - 1]){
            return false;
        }
    }
    return true;
}

if(isPalindrome("abbaa")){
    console.log("True");
}else{
    console.log("False");
}