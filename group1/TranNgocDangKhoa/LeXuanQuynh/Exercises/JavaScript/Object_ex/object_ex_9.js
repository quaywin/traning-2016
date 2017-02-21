function circle(radius){
    this.radius =radius;
    this.area = function(){
        return Math.PI * Math.pow(this.radius,2);
    }
    this.perimeter = function(){
        return Math.PI * 2 *this.radius;
    }
}
var c1 = new circle(3);
console.log("Perimeter: "+c1.perimeter());
console.log("Area: " +c1.area());