function getTime(){
    var t = new Date();
    return t.getHours() + ':' + t.getMinutes() + ':' + t.getSeconds();
}

function updateTime(lastTime){
    var curTime = getTime();
    if (curTime.localeCompare(lastTime) != 0) return curTime;
    else return lastTime;
}

var lastTime = '';
var curTime ='';

setInterval(function(){
    curTime = getTime();
    if (curTime.localeCompare(lastTime) != 0){
        console.log(curTime);
        lastTime = curTime;
    }
}, 100);