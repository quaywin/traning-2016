function extract_unique_characters(str){
    var len = str.length;
    var arr = str.split("");
   
    for(var i = 1; i < len; i++){
        for(var j = 0; j < i; j++){//Cac phan tu truoc do
            if(arr[i] != " " && arr[i] == arr[j]){ 
                arr.splice(i, 1)
                len--;
                i--;
            }
        }
    }
    return arr.join("");
}
console.log(extract_unique_characters("Hoang Nguyen Thu Hang"));