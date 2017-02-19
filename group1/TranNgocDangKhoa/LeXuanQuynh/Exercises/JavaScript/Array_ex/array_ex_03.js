function longest_common_starting_substring(array){
    for(var i=1; i<array.length;i++){
        if(array[0].charAt(0)=== array[i].charAt(0))
            for(var j=1; j< array[0].length;j++){
                if(array[0].charAt(j)!== array[i].charAt(j))
                    return '" "';
            }
        else
            return '" "';
    }
    return '"'+array[0]+'"';
}
console.log(longest_common_starting_substring(['go', 'google']));
console.log(longest_common_starting_substring(['go', 'google','abc']));
console.log(longest_common_starting_substring(['go', 'google',"gosomewhere"]));