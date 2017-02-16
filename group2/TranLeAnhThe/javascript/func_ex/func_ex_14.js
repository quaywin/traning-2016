function amountTocoins(amount, coins){
    var arrs = [];
    var i = 0;
    while(amount !== 0){
        console.log(amount);
        if(amount >= coins[i]){
            arrs.push(coins[i]);
            amount = amount - coins[i];
        }else{
            i++;
        }
    }
    console.log(arrs);
}

amountTocoins(46, [25, 10, 5, 2, 1]);