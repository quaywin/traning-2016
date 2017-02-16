var numbers = [10,20,10,40,50,60,70,40];
var target = 50;

var i = 0;
while(i < numbers.length){
    var j = i;
    while(j < numbers.length){
        if(numbers[j] + numbers[i] === target){
            console.log(i + " , " + j);
        }
        j++;
    }
    i++;
}