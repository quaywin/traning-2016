function extract(str){
    var flag = [];
    var res = '';
    for (var i = 0; i < str.length; i++) 
        if (!flag[str.charCodeAt(i)]){
            res += str.charAt(i);
            flag[str.charCodeAt(i)] = true;
        }
    return res;
}

var str = "thequickbrownfoxjumpsoverthelazydog";

console.log(extract(str));