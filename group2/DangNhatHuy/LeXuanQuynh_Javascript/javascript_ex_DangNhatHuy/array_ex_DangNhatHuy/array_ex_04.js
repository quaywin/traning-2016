function num_string_range(start, end, bounds) {
        startNum = start.charCodeAt(0);
        endNum = end.charCodeAt(0);
        result = '';
        for (var i = startNum; i <= endNum; i++) {
            if (i % bounds == 0) continue;
            result += String.fromCharCode(i);
        }
        return result.split('');
    }
    console.log(num_string_range('a', "z", 2));