function array_filled(length,fillValue){
    var array = [];
    if(typeof fillValue === "number"){
        array.length = length;
        array.fill(fillValue);
    }else
        return "Element is not a number";
    return array;
}
console.log(array_filled(6, 0)); 
console.log(array_filled(3, 'default value')); 