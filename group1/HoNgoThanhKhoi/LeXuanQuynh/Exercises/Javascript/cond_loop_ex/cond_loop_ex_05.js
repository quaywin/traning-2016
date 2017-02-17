function check(n){
    var s = ["even", "odd"];
    for (var i = 0; i<n; i++){
        console.log('"' + i + ' is ' + s[i%2] + '"');
    }
}

check(16);