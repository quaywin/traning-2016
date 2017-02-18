function getValue(array) {
        var show = [];
        for (var i in array) { //i:index,array[i]:value
            if (array[i] < 0 || array[i] > 0) {
                show.push(array[i]);
            }
        }
        return show;
    }
    console.log(getValue([NaN, 0, 15, false, -22, '', undefined, 47, null]));