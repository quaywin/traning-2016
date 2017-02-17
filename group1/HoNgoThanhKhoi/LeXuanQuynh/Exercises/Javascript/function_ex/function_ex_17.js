function countOccurences(str){
    var res = {};
    for (var i = 0; i < str.length; i++)
        if (!res.hasOwnProperty(str.charAt(i))){
            res[str.charAt(i)] = 1;
        }else{
            res[str.charAt(i)]++;
        }
    return res;
}

console.log(countOccurences("abcabcdeabfe"));