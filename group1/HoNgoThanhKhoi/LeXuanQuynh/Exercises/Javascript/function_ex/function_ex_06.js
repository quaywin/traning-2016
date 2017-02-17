function findLongestWord(str){
    str = ' ' + str;
    var res;
    var i = 0;
    var maxLength = 0;
    var count = 0;
    while (i < str.length){
        i++;
        if (str.charAt(i) !== ' '.charAt(0) && str.charAt(i-1) === ' '.charAt(0)){
            count = 1;
            while (str.charAt(i+1) !== ' '.charAt(0) && i < str.length){
                i++;
                count++;
            }
        }
        if (count > maxLength){
            maxLength = count;
            res = str.substring(i - count + 1, i + 1);
        }
    }
    return res;
}

var str = 'We Development Tutoriallllllllll';

console.log(str);
console.log(findLongestWord(str));