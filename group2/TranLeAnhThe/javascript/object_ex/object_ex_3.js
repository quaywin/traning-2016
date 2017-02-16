var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

function objectSize(obj) {
    var arr = []
    for (items in obj) {
        arr.push(items);
    }
    return arr.length;
}

var objsize = objectSize(student);
console.log(objsize);