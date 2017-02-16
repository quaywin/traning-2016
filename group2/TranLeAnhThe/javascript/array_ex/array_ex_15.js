function filter_array_values(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if((typeof arr[i] === "string" && arr[i] !== "") || typeof arr[i] === "number" || typeof arr[i] === true){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
//[58, "abcd", true]
