var numbers = [10, 20, 10, 40, 50, 60, 70];
var target = 50;
var x;

for (var i = 0; i < numbers.length; i++){
    x = 50 - numbers[i];
    for (var j = i + 1; j < numbers.length; j++)
        if (numbers[j] == x)
            console.log((i + 1) + ', ' + (j+1));
}