function num_string_range(begin, end, step){
    var result = [];
    if (begin > end) step *= -1;

    if (step == 0) result = 'Invalid input';
    else if (typeof (begin) == 'number' && typeof (end) == 'number'){
        while (step > 0 ? begin <= end : begin >= end){
            result.push(begin);
            begin += step;
        }
    }else if (typeof (begin) == 'string' && typeof (end) == 'string'){
        if (begin.length != 1 || end.length != 1) result = 'Invalid input';
        else{
            begin = begin.charCodeAt(0);
            end = end.charCodeAt(0);
            while (step > 0 ? begin <= end : begin >= end){
                result.push(String.fromCharCode(begin));
                begin += step;
            }
        }
    }else result = 'Invalid input';

    return result;
}

console.log(num_string_range('Z', 'A', 2));