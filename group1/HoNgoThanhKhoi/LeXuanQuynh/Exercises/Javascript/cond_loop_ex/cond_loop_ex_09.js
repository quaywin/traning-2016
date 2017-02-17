function isAmstrongNumber(x){
    var t, k, y;
    t = 0;
    y = x;
    while (x!=0){
        k = x % 10;
        t += k * k * k;
        x = (x - k) / 10;
    }
    return (t==y);
}

for (var i = 100; i < 1000; i++){
    if (isAmstrongNumber(i))
        console.log(i);
}