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
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];

for(var i = 0; i < library.length; i++){
    var book ="author: " + library[i].author 
    + "\ntitle: " + library[i].title 
    + "\nreadingStatus: " + library[i].readingStatus;
    console.log("Book " + (i + 1) + ":\n" + book);
}