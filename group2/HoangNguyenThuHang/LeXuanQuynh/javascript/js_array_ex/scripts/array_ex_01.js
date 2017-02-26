var numbers = [10, 20, 10, 40, 50, 60, 70]; 
var target = 50;

for(var i = 0; i < numbers.length - 1; i++){   
    for(var j = 1; j <= numbers.length; j++){
        if(numbers[i] + numbers[j] == target){ 
            console.log(i + ", " + j);
        }
    }
    
}

