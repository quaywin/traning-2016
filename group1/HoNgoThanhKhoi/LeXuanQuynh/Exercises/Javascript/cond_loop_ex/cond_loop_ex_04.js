function findMax(a, b, c, d, e){
    if (typeof (a) != 'number' || typeof (b) != 'number' || typeof (c) != 'number' || typeof (d) != 'number' || typeof (e) != 'number')
        console.log('Invalid input');
    else{
        var max = a;
        if (max < b) max = b;
        if (max < c) max = c;
        if (max < d) max = d;
        if (max < e) max = e;
        console.log(max);
    }
}

findMax(-5, -2, -6, 0, 1);