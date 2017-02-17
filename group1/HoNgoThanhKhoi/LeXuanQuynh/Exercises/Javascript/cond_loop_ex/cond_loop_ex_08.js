function isHappyNumber(x){
    var flag = [];
    var t, k;
    while (x!=1){
        if (flag[x] === true) return false;
        else{
            flag[x] = true;
            t = 0;
            while (x != 0){
                k = x % 10;
                t += k * k;
                x = (x - k) / 10;
            }
            x = t;
        }
    }
    return true;
}

var i = 1;
var count = 0;

while (count<5){
    if (isHappyNumber(i)){
        console.log(i);
        count++;
    }
    i++;
}

