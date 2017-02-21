function identityMatrix(n){
    var matrix = [];
    for(var i =0;i<n;i++){
        var temp =[];
        for(var j=0;j<n;j++){
            if(i===j)
                temp.push(1);
            else
                temp.push(0);
        }
        matrix.push(temp);
    }
    for(var i in matrix)    
        console.log(matrix[i]);
}
identityMatrix(3);
identityMatrix(4);