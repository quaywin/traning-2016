var student = { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12 
};
var count=0;
for(var i in student)
    if(i)
        count++;
console.log(count);