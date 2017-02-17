var a = [1, 2];

function longest_common_starting_substring(setOfStrings){
    var s = '';
    for (var i = 0; i < setOfStrings[0].length; i++){
        for (var j = 0; j < setOfStrings.length-1; j++){
            if (setOfStrings[j] == undefined || 
                setOfStrings[j].charAt(i) != setOfStrings[j+1].charAt(i)
            ) return s;
        }
        s += setOfStrings[0].charAt(i);
    }
    return s;
}

console.log(longest_common_starting_substring(['google', 'google', 'google']));