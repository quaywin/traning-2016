Array.prototype.BubbleSort = function(){
    for(var i = 0; i < this.length - 1; i++){
        for(var j = i + 1; j < this.length; j++){
            if (this[i] > this[j]){
                var temp = this[i];
                this[i] = this[j];
                this[j] = temp;
            }
        }
    }
    return this;
}

console.log([6,4,0, 3,-2,1].BubbleSort());