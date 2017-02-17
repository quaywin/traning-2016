var cylinder = {
    radius: 15,
    height: 15,
    volume: function() {
        return (Math.PI*this.radius*2*this.height).toFixed(4);
    }
};

console.log(cylinder.volume());