function move(arr, from, to) {
    var newArr = [];
    if (from >= 0 && to >= 0) {
        for (var i = 0; i < arr.length; i++) {
            if (i === from) {
                continue;
            } else {
                if (i === to) {
                    newArr.push(arr[to]);
                    newArr.push(arr[from]);
                } else {
                    newArr.push(arr[i]);
                }
            }
        }
    }else{
        for (var i = arr.length - 1; i >= 0; i--) {
            if (i - arr.length === from) {
                continue;
            } else {
                if (i - arr.length === to) {
                    to = to + arr.length;
                    from = from + arr.length;
                    newArr.push(arr[to]);
                    newArr.push(arr[from]);
                } else {
                    newArr.push(arr[i]);
                }
            }
        }
        newArr.reverse();
    }

    return newArr;
}


console.log(move([10, 20, 30, 40, 50], 0, 2));
console.log(move([10, 20, 30, 40, 50], -1, -2));