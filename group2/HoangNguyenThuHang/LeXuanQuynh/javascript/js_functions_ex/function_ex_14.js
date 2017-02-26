function amountTocoins(amount, coins){
    var sum = 0;
    var len = coins.length;
    var i = 0;
    var arr = [];
    while(i < len){
        if(sum == amount)  
            return arr;
        else if(sum < amount){
            sum += coins[i];
            arr.push(coins[i]);
        } 
        else{   
            sum = sum - coins[i];
            arr.pop();
            i++;
        }
    }
    return false;
}

console.log(amountTocoins(46, [25, 10, 5, 2, 1]));
