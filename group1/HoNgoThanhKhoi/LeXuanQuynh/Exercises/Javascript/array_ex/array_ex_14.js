function filter_array_values(array){
    var result = [];
    for (var i = 0; i < array.length; i++)
        if (array[i] !== 0 &&
            array[i] !== '' &&
            array[i] !== null &&
            array[i] !== false
        ) result.push(array[i]);
    return result;
}

console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));