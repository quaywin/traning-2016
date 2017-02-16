function array_filled(value, fill){
    var arr = [];
    for(var i = 0; i < value; i++){
        arr.push(fill);
    }
    return arr;
}

console.log(array_filled(3, 'default value')); 
console.log(array_filled(4, 'password'));

