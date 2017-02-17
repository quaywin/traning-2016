//97 - 122
String.prototype.setCharAt = function (index, ch){
    if (index > this.length || index < 0) return this;
    return this.substring(0, index) + ch + this.substring(index+1);
}

function convert(str){
    str = ' ' + str;
    var i = 0;
    while (i < str.length){
        i++;
        if (str.charAt(i) !== ' '.charAt(0) && str.charAt(i-1) === ' '.charAt(0))
            if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123)
                str = str.setCharAt(i, String.fromCharCode(str.charCodeAt(i) - 32));
    }
    return str.substring(1);
}

var str = 'the quick brown fox';

console.log(str);
console.log(convert(str));