function checkHappyNumber(number) {
	var cycle = [];
	var digits;

	while(number != 1 && cycle[number] != true){
		cycle[number] = true;
		var sum = 0;

		digits = number.toString();
		for (var i = 0; i < digits.length; i++) {
			sum += digits[i]*digits[i]; 
		}
		number = sum;
	}
	return (number==1);
}

console.log("Happy number");
var count = 1;
var number = 0;
while(number <= 5){
    if(checkHappyNumber(count) == 1){
        console.log(count + " is a happy number");
        number = number + 1;
    }
    count = count + 1;
}
