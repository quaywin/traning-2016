function convert_uppercase(str){
    var arr = [];
    arr = str.split(" ")
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i].replace(arr[i].charAt(0), arr[i].charAt(0).toUpperCase());
    }
    return arr.join(" ");
}

console.log(convert_uppercase("hoang nguyen thu Hang"));