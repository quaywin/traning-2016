function identityMatrix(n){
    var res = [];
    var row;
    for (var i = 0; i < n; i++){
        row = [];
        for (var j = 0; j < i; j++)
            row.push(0);
        row.push(1);
        for (var j = i+1; j < n; j++)
            row.push(0);
        res.push(row);
    }
    return res;
}

console.log(identityMatrix(10));