function convert(obj){
    var result = [];
    var a;
    for (var key in obj){
        a = [];
        a.push(key);
        a.push(obj[key]);
        result.push(a);
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

console.log(convert(b));