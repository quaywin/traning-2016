function remove_array_element(arr, element){
    var index = arr.indexOf(element);
    arr.splice(index, 1);

    return arr;
}

var arr = [1, 2, 3, 4, 6, 100];
console.log(remove_array_element(arr, 4));