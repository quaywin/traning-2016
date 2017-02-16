function alphaOrder(str) {
    return str.split('').sort().join('');
}
console.log(alphaOrder("webmaster"));
console.log(alphaOrder("123 213"));