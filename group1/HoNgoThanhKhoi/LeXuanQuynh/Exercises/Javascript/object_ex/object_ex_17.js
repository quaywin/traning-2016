function isContent(obj, prop){
    return obj[prop] ? true : false;
}

var a = {
    prop1: 1,
    prop2: 2,
    prop3: 3
};

var b = Object.create(a);

b.prop4 = 4;

console.log(isContent(b, 'prop4'));