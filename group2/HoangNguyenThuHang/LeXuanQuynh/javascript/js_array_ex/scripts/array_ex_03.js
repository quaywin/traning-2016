function longest_common_starting_substring(arrStr){
    var str1 = arrStr[0];
    var str2 = arrStr[1];
    var len = str1.length;
    var i = 0, subStr;
    while(i < len && str1.charAt(i) === str2.charAt(i)){
        subStr = str1.substring(0, i + 1);
        i++;
    }
    return subStr;
}

var arrStr = ["google", "googxxx"];
console.log(longest_common_starting_substring(arrStr));
