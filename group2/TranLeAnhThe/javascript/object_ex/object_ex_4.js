var library = [{
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

for(var i = 0; i < library.length; i++){
    console.log(library[i].author + " status : " + library[i].readingStatus);
}
