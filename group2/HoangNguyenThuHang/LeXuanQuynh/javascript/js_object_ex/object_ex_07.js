String.prototype.subset_string = function(){
     var len = this.length;
    var arr = [];
    var temp_len = len;
    for(var i = 0; i < len; i++){
        for(var j = 1; j <= temp_len; j++){
            arr.push(this.substr(i, j));
        }
        temp_len--;
    }
    return arr;
}

console.log("Dog".subset_string());