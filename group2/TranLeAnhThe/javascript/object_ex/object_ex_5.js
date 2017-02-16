function Cylinder(radius, height){
    this.radius = radius;
    this.height = height;
    this.volume = function(){
        var vol = Math.PI * this.radius * this.radius * this.height;
        return vol.toFixed(2);
    };
}

var cly = new Cylinder(4, 10);
console.log(cly.volume());

