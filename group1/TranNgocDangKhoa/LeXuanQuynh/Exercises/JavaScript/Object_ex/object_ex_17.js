function checkProp(obj, prop){
    return typeof obj === "object" && obj.hasOwnProperty(prop);
}
var temp ={
    name:"abc",
    age:13,
    isMarried: true
}
console.log(checkProp(temp,"gender"));
console.log(checkProp(temp,"age"));