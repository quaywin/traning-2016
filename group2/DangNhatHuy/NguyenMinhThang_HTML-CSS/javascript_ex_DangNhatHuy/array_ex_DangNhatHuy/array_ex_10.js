function  rand(items) {
    return  items[Math.floor(Math.random() * items.length)];
}
var  items  =  [12, 332, 46, 27273, 209, 799, 012, 34, 74];
console.log(rand(items));