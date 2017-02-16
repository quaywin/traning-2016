
String.prototype.subString = function(){
    var arr = [];
    for(var i = 0; i < this.length; i++){
        for(var j = i + 1; j < this.length + 1; j++){
            arr.push(this.slice(i, j));
        }
    }
    return arr;
}

console.log("dog".subString());