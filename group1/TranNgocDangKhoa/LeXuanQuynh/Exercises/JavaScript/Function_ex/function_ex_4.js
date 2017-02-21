function alphabetSort(str){
    var temp=[];
    for(var i in str){
        temp.push(str[i]);
    }
    for(var i=0;i<temp.length; i++)
        for(var j=i+1; j<temp.length;j++)
            if(temp[i]>temp[j]){
                var t=temp[i];
                temp[i]=temp[j];
                temp[j]=t;
            }
    str = "";
    for(var i in temp)
        str+=temp[i];
    
    return str;
}

console.log(alphabetSort("webmaster"));
