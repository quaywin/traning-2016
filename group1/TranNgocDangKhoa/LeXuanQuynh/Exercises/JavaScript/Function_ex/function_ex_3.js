function subSet(str){
    var temp = [];
    for(var i=0;i<str.length;i++){
        for(var j=i+1; j<=str.length;j++){
            temp.push(str.substring(i,j));
        }
    }
    return temp;
}
console.log(subSet("dog"));
console.log(subSet("mad"));