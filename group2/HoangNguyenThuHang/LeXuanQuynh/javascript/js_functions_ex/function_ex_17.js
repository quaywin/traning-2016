function occurrences_letter(str){
    var arr = [], len = str.length;
    var arr1 = []; //Lưu các kí tự đã đếm rồi
    var result = [];
    arr = str.split("");
    for(var i = 0; i < len; i++){
        //Kiểm tra xem kí tự đã có trong mảng đếm rồi chưa?
        var check = true; //Chưa có
        for(var j = 0; j < arr1.length; j++){
            if(arr[i] == arr1[j]){
                check = false;
                break;
            }
        }
        var count = 0;
        if(check == true){
            for(var k = i; k < len; k++){
                if(arr[i] == arr[k])
                    count++;
            }
            result.push(arr[i] + ": " + count);
            arr1.push(arr[i]);
        }
    }
    return result;
}

console.log(occurrences_letter("Hoang Nguyen Thu Hang"));
