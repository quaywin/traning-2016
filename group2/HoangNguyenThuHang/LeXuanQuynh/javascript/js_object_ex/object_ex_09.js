//var circle = {r};
function circle(r){
    this.r = r;
}

circle.prototype.calculate_area = function(){
    return 2 * Math.PI * this.r;
}
circle.prototype.calculate_perimeter = function(){
    return Math.pow(this.r, 2) * Math.PI;
}

var r = prompt("Input radius: ");
var c = new circle(r);
console.log("Area: " + c.calculate_area());
console.log("Perimeter: " + c.calculate_perimeter());
