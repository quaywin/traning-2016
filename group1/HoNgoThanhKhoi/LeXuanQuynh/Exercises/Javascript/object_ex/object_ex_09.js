var circle = {
    radius: 0,
    area: function(){
        return Math.PI*this.radius*this.radius;
    },
    perimeter: function(){
        return Math.PI*this.radius*2;
    }
};

circle.radius = 15;

console.log('Area: ' + circle.area() + '\nPerimeter: ' + circle.perimeter());