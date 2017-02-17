var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
];

for (var i = 0; i < library.length; i++){
    console.log("Book name: " + library[i].title);
    console.log("Author name: " + library[i].author);
    console.log("Reading status: " + library[i].readingStatus + "\n");
}