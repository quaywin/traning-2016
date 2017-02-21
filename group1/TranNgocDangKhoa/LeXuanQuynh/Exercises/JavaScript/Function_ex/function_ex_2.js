function isPalindrome(str){
    if(str.length ===1)
        return true;
    else{
        var l =str.length-1;
        for(var i=0;i<=l/2;i++){
            if(str[i]!==str[l-i])
                return false;          
        }
        return true;
    }
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("nurrun"));
console.log(isPalindrome("ma"));
console.log(isPalindrome("m"));