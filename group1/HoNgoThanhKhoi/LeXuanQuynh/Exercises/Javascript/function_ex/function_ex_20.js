var chList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function genID(length){
    var s = '';
    var x;
    for (var i = 0; i < length; i++){
        x = Math.floor(Math.random() * chList.length);
        s += chList[x];
    }
    return s;
}

console.log(genID(20));