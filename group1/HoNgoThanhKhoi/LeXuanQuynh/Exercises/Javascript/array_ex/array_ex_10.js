function getRandomItem(array){
    var index = Math.floor(Math.random() * array.length);
    return array[index];
}

console.log(getRandomItem([1, 2, 3, 4, 5, 6, 7, 8, 9]));