function uniqueCharacter(str){
    var rel = "";
    for(var i = 0; i < str.length; i++){
        var check = false;
        for(var j = 0; j < rel.length; j++){
            if(rel[j] === str[i]){
                check = true;
            }
        }
        if(check === false){
            rel += str[i];
        }
    }
    return rel;
}

function numberOfOccurrences(str){
    var unique = uniqueCharacter(str);
    for(var i = 0; i < unique.length; i++){
        var count = 0;
        for(var j = 0; j < str.length; j++){
            if(str[j] === unique[i]){
                count++;
            }
        }
        console.log(unique[i] + " : " + count);
    }
} 

numberOfOccurrences("abcabc");
