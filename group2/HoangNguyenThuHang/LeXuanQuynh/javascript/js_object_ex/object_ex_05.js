function Cylinder (r, h){
    this.r = r;
    this.h = h;
}
//Volume of a cylinder : V = (PI)r2h
Cylinder.prototype.volume = function(){
    return Math.PI * Math.pow(this.r, 2) * 2 * this.h;
}

var c = new Cylinder(2, 4);
console.log("Volume = " + c.volume());
