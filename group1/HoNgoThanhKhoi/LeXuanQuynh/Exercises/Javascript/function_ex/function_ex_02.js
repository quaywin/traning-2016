function isPalindrome(str){
    for (var i = 0; i <= str.length/2; i++){
        if (str.charAt(i) !== str.charAt(str.length-i-1)) return false;
    }
    return true;
}

var str = 'nureserun';

console.log(str);
console.log(isPalindrome(str));