function contains(array, element){
    for (var i = 0; i < array.length; i++)
        if (array[i] === element)
            return true;
    return false;
}

console.log(contains([1, 3, 5, 7, 9], 2));