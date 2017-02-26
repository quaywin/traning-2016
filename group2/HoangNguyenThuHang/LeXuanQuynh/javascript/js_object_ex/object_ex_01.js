function list_properties_object(obj){
    var keys = [];
    for(var key in obj){
         keys.push(key + ": " + obj[key]);
    }
       
    return keys;
}

var student = { 
name : "David Rayy", 
sclass : "VI", 
rollno : 12 };

console.log(list_properties_object(student));
