function countLetter(str){
    var temp = {};
    for(var i=0;i<str.length;i++){
        if(!temp.hasOwnProperty(str[i])){
            temp[str[i]]=1;
        }else{
            temp[str[i]]++;
        }
    }
    return temp;
}
console.log(countLetter("abcdeabcd"));