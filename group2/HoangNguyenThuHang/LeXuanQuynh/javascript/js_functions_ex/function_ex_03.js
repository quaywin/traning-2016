function combinations_substring(str){
    var len = str.length;
    var arr = [];
    var temp_len = len;
    for(var i = 0; i < len; i++){
        for(var j = 1; j <= temp_len; j++){
            arr.push(str.substr(i, j));
        }
        temp_len--;
    }
    return arr;
}

console.log(combinations_substring("Dog"));