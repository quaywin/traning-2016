function num_string_range(start, end, step) {
    var result = [];
    if (typeof start === "string" && typeof end === "string" && typeof step === "number") {
        start = start.charCodeAt(0);
        end = end.charCodeAt(0);
        if (start > end) {
            for (i = end; i >= start; i -= step) {
                result.push(String.fromCharCode(i));
            }
        } else {
            for (i = start; i <= end; i += step) {
                result.push(String.fromCharCode(i));
            }
        }
    } else {
        if (typeof start === "number" && typeof end === "number" && typeof step === "number") {
            if (start > end) {
                for (i = end; i >= start; i -= step) {
                    result.push(i);
                }
            } else {
                for (i = start; i <= end; i += step) {
                    result.push(i);
                }
            }
        }
    }
    return result;
}

console.log(num_string_range("a", "z", 2));
console.log(num_string_range(1, 20, 2));