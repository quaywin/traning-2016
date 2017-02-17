function compare(a, b) {
    if (typeof (a) != 'number' || typeof (b) != 'number')
        console.log('Invalid input');
    else{
        if (a > b) console.log(a);
        else console.log(b);
    }
}

compare(12, 10);