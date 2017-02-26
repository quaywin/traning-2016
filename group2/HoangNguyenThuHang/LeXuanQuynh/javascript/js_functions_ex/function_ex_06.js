function find_longest_word(str){
    var arr = [];
    arr = str.split(/[ ;,/:.!?]+/);
    var max = arr[0].length;
    var imax = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i].length > max){
            max = arr[i].length;
            imax = i;
        }        
    }
    return arr[imax];
}

console.log(find_longest_word("Hello, Hoang Nguyen Thu Hang."));
console.log(find_longest_word("Web Development Tutorial"));
