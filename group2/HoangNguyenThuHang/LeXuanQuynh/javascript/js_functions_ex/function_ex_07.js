function count_vowels(str){
    var len = str.length;
    var count = 0;
    for(var i = 0; i < len; i++){
        if(str.charAt(i) === 'u' || str.charAt(i) === 'e' 
        || str.charAt(i) === 'o' || str.charAt(i) === 'a' 
        || str.charAt(i) === 'i' || str.charAt(i) === 'y' 
        || str.charAt(i) === 'U' || str.charAt(i) === 'E' 
        || str.charAt(i) === 'O' || str.charAt(i) === 'A' 
        || str.charAt(i) === 'I' || str.charAt(i) === 'Y')
        
        count++;
    }
    return count;
}

console.log(count_vowels('The quick brown fox'));