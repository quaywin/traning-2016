var student = { 
name : "David Rayy", 
sclass : "VI", 
rollno : 12 };

var size = 0, key;
for (key in student) {
    if (student.hasOwnProperty(key)) 
        size++;
}

console.log("Length of object is: " + size);