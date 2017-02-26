function Clock(){
    this.date = new Date();
    this.h = this.date.getHours();
    this.m = this.date.getMinutes();
    this.s = this.date.getSeconds();
}
Clock.prototype.run = function(){
    this.update();
    setInterval(, 1000);
 }

Clock.prototype.update = function(){  
    this.s++;
    if(this.s = 60){
        this.m++;
        this.s = 0;
    }
    if(this.m = 60){
        this.h++;
        this.m = 0;
    }
    if(this.h = 24){
        this.h = 0;
    }
    
}
 

var clock = new Clock();
clock.run();