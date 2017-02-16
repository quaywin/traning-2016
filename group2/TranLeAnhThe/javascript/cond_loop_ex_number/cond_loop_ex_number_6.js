function rateStudent(grade){
    if(grade < 60){
        console.log("Grade F");
    }else{
        if(grade < 70){
            console.log("Grade D");
        }else{
            if(grade < 80){
                console.log("Grade C");
            }else{
                if(grade < 90){
                    console.log("Grade  B");
                }else{
                    if(grade <= 100){
                        console.log("Grade A");
                    }
                }
            }
        }
    }
}

var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];  
for(var index = 0; index < students.length; index++){
    console.log("Student " + students[index][0] + " ");
    rateStudent(students[index][1]);
}