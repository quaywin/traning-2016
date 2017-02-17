function printPattern(n){
    var s;
    for (var i = 1; i <=n; i++){
        s = '';
        for (var j = 0; j < i; j++)
            s += '* ';
        console.log(s);
    }
}

printPattern(5);