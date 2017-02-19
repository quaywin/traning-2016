var temp =[6,4,0, 3,-2,1];
var Data = {
    arr :temp,
    bubbleSort : function(){
        for(var i=0; i <this.arr.length; i++){
            for(var j=i+1; j<this.arr.length;j++){
                if(this.arr[i]>this.arr[j]){
                    var temp = this.arr[i];
                    this.arr[i]=this.arr[j];
                    this.arr[j]=temp;
                }
            }
        }
         return this.arr;
    }
}
console.log(Data.arr);
console.log(Data.bubbleSort());