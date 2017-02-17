function sortThreeNumber(a, b, c){
    if (typeof (a) != 'number' || typeof (b) != 'number' || typeof (c) != 'number')
        console.log('Invalid input');
    else{
        var t;
        if (a < b){
            t = a;
            a = b;
            b = t;
        }
        if (a < c){
            t = a;
            a = c;
            c = t;
        }
        if (b < c){
            t = b;
            b = c;
            c = t;
        }
        alert(a+' '+b+' '+c);
    }
}

sortThreeNumber(-1, 0, 4);
