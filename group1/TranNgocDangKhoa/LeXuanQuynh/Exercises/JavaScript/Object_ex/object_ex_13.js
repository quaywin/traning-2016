function all_properties(obj){
    var temp= [];
    for(var i in obj) 
        temp.push(i);
    return temp;
}
function a(){
    this.name="fafa";
    this.age=12;
}
a.prototype.test = true;
console.log(all_properties(new a()));