function remove_array_element(array,num){
    for(var i=0; i<array.length;i++){
        if(array[i]===num)
            array.splice(i,1);
    }
    return array;
}
console.log(remove_array_element([2, 5, 9, 6,5], 5));