var marks = [80, 77, 88, 95, 68];
var len = marks.length;
var sum = 0; 
for(var i = 0; i < len; i++){
    sum += marks[i];
}
var average = sum / len;
alert("Average: " + average);
 if(average < 60){
     alert("Grade: F");
 }
 else if(average < 70){
     alert("Grade: D");
 }
 else if (average < 80){
     alert("Grade: C");
 }
 else if (average < 90){
     alert("Grade: B");
 }
 else{
     alert("Grade: A");
 }