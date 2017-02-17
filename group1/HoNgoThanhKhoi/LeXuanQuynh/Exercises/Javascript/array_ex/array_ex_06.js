function remove_array_element(array, element){
    for (var i = 0; i < array.length; i++)
        if (array[i] === element) array.splice(i, 1);
    return array;
}

console.log(remove_array_element([1, 9, 3, 5, 7, 8], 5));