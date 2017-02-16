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


console.log(uniqueCharacter("abcabcabc"));
