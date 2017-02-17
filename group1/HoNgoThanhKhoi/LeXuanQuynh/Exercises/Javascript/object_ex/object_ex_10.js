function sort(array) {
    for (var i = 0; i < array.length; i++)
        for (var j = i+1; j < array.length; j++)
            if (array[i].libraryID < array[j].libraryID) {
                var t = array[i];
                array[i] = array[j];
                array[j] = t;
            }
    return array;
}

var library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }
];

library = sort(library);

console.log(library);