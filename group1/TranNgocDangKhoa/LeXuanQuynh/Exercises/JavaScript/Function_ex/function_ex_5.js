function UpperEach(str){
    var temp="";
    if(str.charCodeAt(0)>=97)
        temp+=String.fromCharCode((str.charCodeAt(0)-32));
    else
        temp+=str[0];
    for(var i=1;i<str.length;i++){
        if(str[i-1]===' '){
            if(str.charCodeAt(i)>=97)
                temp+=String.fromCharCode((str.charCodeAt(i)-32));
            else
                temp+=str[i];
        }
        else
            temp+=str[i];
    }
    return temp;
}

console.log(UpperEach('the quick brown fox'));