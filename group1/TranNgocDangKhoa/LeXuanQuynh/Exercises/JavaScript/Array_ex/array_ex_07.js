function find_array_element(array,num){
    for(var i=0; i<array.length;i++){
        if(array[i]===num)
            return true;
    }
    return false;
}
console.log(find_array_element([2, 5, 9, 6,5], 8));