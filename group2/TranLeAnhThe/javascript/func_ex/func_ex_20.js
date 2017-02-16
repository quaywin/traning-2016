function randomCharacter(len){
    var text = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var rel = "";
    for(var i = 0; i < len; i++){
        rel += text.charAt(Math.floor(Math.random() * text.length));
    }
    return rel;
}

console.log(randomCharacter(19));