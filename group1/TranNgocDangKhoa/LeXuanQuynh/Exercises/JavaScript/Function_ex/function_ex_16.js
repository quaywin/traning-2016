function extract(str){
    var temp="";
    var obj= {};
     for(var i=0;i<str.length;i++){
        if(!obj.hasOwnProperty(str[i])){
            obj[str[i]]=true;
            temp+=str[i];
        }
    }
    return temp;
}

console.log(extract("thequickbrownfoxjumpsoverthelazydog"));