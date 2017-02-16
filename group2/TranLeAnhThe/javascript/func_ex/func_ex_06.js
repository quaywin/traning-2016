function longestWords(str){
    var splitStr = str.split(" ");
    var max = splitStr[0].length;
    var pos = 0;
    for(var i = 0; i < splitStr.length; i++){
        if(max < splitStr[i].length){
            max = splitStr[i].length;
            pos = i;
        }
    }
    return splitStr[pos];
}

console.log(longestWords("tran leeeaaa anh the"));