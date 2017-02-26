function string_id(str, len){
    var id = "";
    for(var i = 0; i < len; i++){
        //Math.floor((Math.random() * 100) + 1)=> Return a random number between 1 and 100
        id += str.charAt(Math.floor(Math.random() * str.length));
    }
    return id;
}

console.log(string_id("abcdefghik", 5));