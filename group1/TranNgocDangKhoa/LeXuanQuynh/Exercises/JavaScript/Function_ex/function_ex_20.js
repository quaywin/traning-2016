function makeID(length){  
    var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var id = "";     
    for(var i=0; i < length; i++){ 
        id += char.charAt(Math.floor(Math.random() * char.length));  
    }  
    return id;  
}  
console.log(makeID(6));  