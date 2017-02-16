for (var index = 0; index < 100; index++) {
    if (index % 3 == 0 && index % 5 == 0) {
        console.log(index + " FizzBuzz");
    } else {
        if (index % 3 == 0) {
            console.log(index + " Fizz");
        } else {
            if (index % 5 == 0) {
                console.log(index + " Buzz");
            }
        }
    }
}