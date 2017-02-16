function longest_common_starting_substring(arr){
    var result = "";
    for(var i = 0; i < arr[0].length; i++){
        if(arr[0][i] === arr[1][i]){
            result += arr[0][i];
        }else{
            return result;
        }
    }
    return result;
}


console.log(longest_common_starting_substring(['go', 'google']));
console.log(longest_common_starting_substring(['go12oogle', 'google']));