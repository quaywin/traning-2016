function amountTocoins(amount, coins){
    var numOfCoins = [], res = [];
    var temp, i = 0;
    while(amount != 0){
        numOfCoins.push((amount - amount % coins[i]) / coins[i]);
        amount = amount % coins[i];
        i++;
    }
    for (i = 0; i < numOfCoins.length; i++)
        // if (numOfCoins[i] !== 0 && numOfCoins[i] !== undefined)
            for (var j = 0; j < numOfCoins[i]; j++)
                res.push(coins[i]);
    return res;
}

console.log(amountTocoins(48, [25, 10, 5, 2, 1]));