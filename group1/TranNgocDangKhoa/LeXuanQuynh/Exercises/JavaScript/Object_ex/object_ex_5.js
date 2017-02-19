var Cylinder = {
    r: 10,
    h: 10,
    volume: function(){
        return Math.PI*this.r*this.h*2;
    }
}
console.log("Volume of a cylinder: "+Cylinder.volume());