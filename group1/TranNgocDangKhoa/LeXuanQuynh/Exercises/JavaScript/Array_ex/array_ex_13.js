function twist(num, length){
    if(num<0)
        num+=length;
    return num;
}
function move(array,pos,des){
    pos= twist(pos,array.length);
    des= twist(des,array.length);
    var temp = array[pos];
    array.splice(pos,1);
    array.splice(des,0,temp);
    return array;
}
console.log(move([10, 20, 30, 40, 50], 0, 2));
console.log(move([10, 20, 30, 40, 50], -1, -2));