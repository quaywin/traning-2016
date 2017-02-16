function convertWords(str){
    var splitStr = str.split(" ");
    for(var i = 0; i < splitStr.length; i++){
        var temp = splitStr[i].charAt(0).toUpperCase();
        splitStr[i] = temp + splitStr[i].substr(1).toLowerCase();
    }
    return splitStr.join(" ");
}

console.log(convertWords("tran le anh the"));