var markTable = [
    ['David', 80],
    ['Vinoth', 77],
    ['Divya', 88],
    ['Ishitha', 95],
    ['Thomas', 68]
];

var totalMark = 0;
var averageMark;
var grade;

for (var i = 0; i < markTable.length; i++)
    totalMark +=markTable[i][1];

averageMark = totalMark/markTable.length;

if (averageMark < 60) grade = 'F';
else if (averageMark < 70) grade = 'D';
else if (averageMark < 80) grade = 'C';
else if (averageMark < 90) grade = 'B';
else if (averageMark < 100) grade = 'A';

console.log('AveragelMark: ' + averageMark);
console.log('Grade: ' + grade);



