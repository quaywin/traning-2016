function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function Clock(hour, minutes, second) {
    this.hour = hour;
    this.minutes = minutes;
    this.second = second;
}

Clock.prototype.run = function() {
    if (this.hour < 0 && this.hour > 23) {
        return false;
    }
    if (this.minutes < 0 && this.minutes > 59) {
        return false;
    }
    if (this.second < 0 && this.second > 59) {
        return false;
    }

    var count = 0; // test
    while (count < 20) {
        console.log(this.hour + ":" + this.minutes + ":" + this.second);
        this.second++;
        if (this.second === 60) {
            this.minutes++;
            this.second = 0;
        }
        if (this.minutes === 60) {
            this.hour++;
            this.minutes = 0;
        }
        if (this.hour === 24) {
            this.hour = 0;
            this.minutes = 0;
            this.second = 0;
        }
        count++;
    }

}

var clo = new Clock(14, 12, 50);
clo.run();