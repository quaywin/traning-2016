var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

var count = 0;

for (var key in student)
    count++;

console.log("length = " + count);