var s;

for (var i = 1; i<=100; i++){
    s = i + ' ';
    if (i % 3 == 0) s+='Fizz';
    if (i % 5 == 0) s+='Buzz';
    console.log(s);
}