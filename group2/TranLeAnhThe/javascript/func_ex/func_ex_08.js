function primeNumber(num) {
    if (num < 2) {
        return false;
    }
    for (var i = 2; i <= parseInt(num / 2); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

var arr = [2, 3, 4, 5, 6, 7, 9, 11];
for (var j = 0; j < arr.length; j++) {
    if (primeNumber(arr[j]) === true) {
        console.log(arr[j] + " true");
    } else {
        console.log(arr[j] + " false");
    }
}