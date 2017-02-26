var student = { 
name : "David Rayy", 
sclass : "VI", 
rollno : 12 };
console.log("Before: ");
console.log(student);
//delete student["rollno"];
delete student.rollno;
console.log("After: ");
console.log(student);