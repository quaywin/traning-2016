var library = [ 
   {
       title:  'The Road Ahead',
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
   }];
for(var i in library){
    for(var j=i+1 in library){
        if(library[j].libraryID<library[i].libraryID){
            var temp = library[i];
            library[i]= library[j];
            library[j]=temp;
        }
    }
}


console.log(library);