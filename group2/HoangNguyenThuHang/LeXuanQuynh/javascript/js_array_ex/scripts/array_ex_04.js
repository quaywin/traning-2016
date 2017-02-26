function num_string_range(begin, end, step){

    var arr = [];
    // console.log(typeof('A'));
    // console.log(typeof("A"));
    // console.log(typeof('ABc'));
    // console.log(typeof("ABc"));

    if(typeof(begin) == undefined || typeof(end) == undefined || typeof(begin) != typeof(end)){
        return false;
    }

    if(typeof(begin) == "number"){
        if(begin > end) step = -step;

        while(step > 0 ? end >= begin : end <= begin){
            arr.push(begin);
            begin += step;
        }
    }
    else if(typeof(begin) == "string"){

        if (begin.length != 1 || end.length != 1) {  
            return "Error Strings with many characters";  
        }  
        if(begin > end) step = -step;

        begin = begin.charCodeAt(0);  
        end = end.charCodeAt(0);  

        while(step > 0 ? end >= begin : end <= begin){
            arr.push(String.fromCharCode(begin));
            begin += step;
        }
    }
    else{
        return "Only string and number are supported";
    }
    return arr;
}

console.log(num_string_range("Z", 'A', 1));