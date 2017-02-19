var numbers= [10,20,10,40,50,60,70];
var target = 50;
for(var i=0; i<numbers.length;i++){
        if(numbers[i]+numbers[i+1]===target){
            console.log((i+1)+" va "+(i+2));
    }
}