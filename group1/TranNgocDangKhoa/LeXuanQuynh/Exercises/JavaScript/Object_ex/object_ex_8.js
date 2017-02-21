function clock(){
    var time = new Date();
    this.h = time.getHours();
    this.m = time.getMinutes();
    this.s = time.getSeconds();
}
clock.prototype ={
    run: function(){
        setInterval(this.update.bind(this),1000)
    },
    update: function(){
        this.s++;
        if(this.s >= 60){
            this.m++;
            this.s = 0;
        }
        if(this.m >=60){
            this.h++;
            this.m = 0;
        }
        if(this.h>24){
            this.h=0;
        }
        console.log(this.h+":"+this.m+":"+this.s);
    }
}
var myclock = new clock();
myclock.run();