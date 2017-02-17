function reverseCopy(obj){
    var result = {};
    for (var key in obj){
        result[obj[key]] = key;
    }
    return result;
}

var a = {
    prop1: 1,
    prop2: 2,
    prop3: 3
};

var b = Object.create(a);

b.prop4 = 4;

console.log(reverseCopy(b));