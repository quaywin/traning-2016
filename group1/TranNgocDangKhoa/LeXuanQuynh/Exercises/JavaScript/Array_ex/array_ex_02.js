var Sample = [NaN, 0, 15, false, -22, '',undefined, 47, null];
function retrieve(array){
    var temp=[];
    for(var i=0; i< array.length; i++){
        if(array[i])
            temp.push(array[i]);
    }
    return temp;
}
console.log(retrieve(Sample));