function countVowels(str){
    var count=0;
    for(var i in str){
        var letter = str[i].toLowerCase();
        if(letter==="a" || letter==="e" || letter==="u" || letter==="i" || letter==="o" )
            count++;
    }
    return count;
}
console.log(countVowels('The quick brown fox' ));