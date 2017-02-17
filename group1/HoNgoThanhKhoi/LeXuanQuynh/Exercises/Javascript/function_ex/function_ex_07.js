var vowels = 'aeiouAEIOU';

function countVowel(str){
    var res = 0;
    for (var i = 0; i < str.length; i++)
        for (var j = 0; j < 10; j++)
            if (str.charAt(i) === vowels.charAt(j)){
                res++;
                break;
            }
    return res;
}

var str = 'The quick brown fox';

console.log(str);
console.log(countVowel(str));