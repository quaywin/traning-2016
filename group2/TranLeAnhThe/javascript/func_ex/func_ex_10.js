function defineMatrix(n){
    var count = 0;
    for(var i = 0; i < n; i++){
        var str = "";
        for(var j = 0; j < n; j++){
            str += count;
            str += " ";
            count++;
        }
        console.log(str);
    }
}

defineMatrix(4);