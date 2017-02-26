function check_palindrome(str){
    str = str.toLowerCase().replace(" ", ""); //Chuyen chu hoa, xoa khoang trang 
    
    var str1 = str.split("").reverse().join("");
    if(str == str1)    
        return true;
    return false;
}

console.log(check_palindrome("A"));
console.log(check_palindrome("ABC"));
console.log(check_palindrome("Abcba"));
console.log(check_palindrome("nurses run"));