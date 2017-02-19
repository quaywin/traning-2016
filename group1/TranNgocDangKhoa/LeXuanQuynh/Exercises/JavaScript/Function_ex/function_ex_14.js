function amountTocoins(amount,arr){
    var temp = [];
    for(var i in arr){
        var j=1,count=0;
        while(true){
            if(arr[i]*j >amount)
                break;
            else{
                j++;
                temp.push(arr[i]);
                count+=arr[i];
            }
        }
        amount -=count;
    }
    console.log(temp);
}
amountTocoins(46, [25, 10, 5, 2, 1]);