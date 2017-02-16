var arr = [4,1,2,5,-3,1,2,5];
console.log(arr);
Array.prototype.bubbleSort = function(){
    for(var i = 0; i < this.length; i++){
        for(var j = i + 1; j < this.length; j++){
            if(this[i] > this[j]){
                var temp =this[i];
                this[i] = this[j];
                this[j] = temp;
            }
        }
    }
    return this;
}

console.log(arr.bubbleSort());