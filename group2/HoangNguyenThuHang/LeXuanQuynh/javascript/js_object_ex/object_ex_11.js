function print_all_properties(obj){
    return Object.getOwnPropertyNames(obj);
}

var student = { 
name : "David Rayy", 
sclass : "VI", 
rollno : 12 };

console.log(print_all_properties(student));
console.log(print_all_properties(String));