function findlongestSubString(array) {
        var string = '';
        for (var i in array[0]) {
            if (array[0][i] === array[1][i]) {
                string = string + array[0][i];
            }
        }
        return string;
    }
    console.log(findlongestSubString(['huydang', 'huydannhat']));
    console.log(findlongestSubString(['go', 'google']));