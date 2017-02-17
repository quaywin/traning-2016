Array.prototype.bubbleSort = function(){
    for (var i = 0; i < this.length; i++){
        for (var j = i+1; j < this.length; j++){
            if (this[i] > this[j]){
                var t = this[i];
                this[i] = this[j];
                this[j] = t;
            }
        }
    }
};

var a = [6,4,0, 3,-2,1];

console.log(a);

a.bubbleSort();

console.log(a);