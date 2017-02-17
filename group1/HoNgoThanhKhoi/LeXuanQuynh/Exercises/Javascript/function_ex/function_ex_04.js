String.prototype.setCharAt = function (index, ch){
    if (index > this.length || index < 0) return this;
    return this.substring(0, index) + ch + this.substring(index+1);
}

function sortLetter(str){
    for (var i = 0; i < str.length; i++)
        for (var j = i+1; j < str.length; j++)
            if (str.charCodeAt(i) > str.charCodeAt(j)){
                var t = str.charAt(i);
                str = str.setCharAt(i, str.charAt(j));
                str = str.setCharAt(j, t);
            }
    return str;
}

var str = 'webmaster';

console.log(str);
console.log(sortLetter(str));