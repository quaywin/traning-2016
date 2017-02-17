String.prototype.subsetStrings = function(){
    var result = [];
    for (var i = 0; i < this.length; i++){
        for (var j = i + 1; j <= this.length; j++){
            result.push(this.substring(i,j));
        }
    }
    return result;
};

var s = 'dog';

console.log(s.subsetStrings());