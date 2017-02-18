function findSum(numbers, target) {
        for (var i = 0; i < numbers.length - 1; i++) {
            for (var j = i + 1; j < numbers.length; j++) {
                if (numbers[i] + numbers[j] == target) {
                    console.log(i + ", " + j);
                }
            }
        }
    }
    console.log(findSum([10, 20, 10, 40, 50, 60, 70], 50));