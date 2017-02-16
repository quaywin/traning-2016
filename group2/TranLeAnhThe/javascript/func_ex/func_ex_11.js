function sencondGreatLowNumber(arr){
    for(var i = 0; i < arr.length; i++){
        for(var j = i + 1; j < arr.length - 1; j++){
            if(arr[i] > arr[j]){
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    if(arr.length >= 3){
        console.log(arr[1] + " " + arr[arr.length - 1]);
    }else{
        if(arr.length === 2){
            console.log(arr[1] + " " + arr[arr.length - 1]);
        }
    }
 }

sencondGreatLowNumber([1,5,2,4,8,6]);