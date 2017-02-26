function indentity_matrix(n){
    for(var i = 0; i < n; i++){
        var temp = "";
        for(var j = 0; j < n; j++){
            if(i == j) 
                temp += "1 ";
            else
                temp += "0 ";
        }
        console.log(temp);
    }
}
indentity_matrix(4);
indentity_matrix(5);