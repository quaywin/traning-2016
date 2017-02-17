function findSign(a, b, c){
    if (typeof (a) != 'number' || typeof (b) != 'number' || typeof (c) != 'number')
        console.log('Invalid input');
    else if ((a > 0 && b > 0 && c > 0) ||
        (a > 0 && b < 0 && c < 0) ||
        (a < 0 && b > 0 && c < 0) ||
        (a < 0 && b < 9 && c < 0)
    ) alert('The sign is +');
    else alert('The sign is -');
}

findSign(1, 1, -2);