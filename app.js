
//students  صنع    
let myStudents = ["ahmad", "anas", "omar", "ali", "widad", "layan", "esraa"];

//عدد العناصر في array
let length = myStudents.length;

//اول عنصر في array
let firstStudent = myStudents[0];

//اخر عنصر في array
let lastStudent = myStudents[length-1];

//اضافة عنصر
myStudents.push("noor");

//طريقة اخرى لاضافة عنصر في مكان محدد
myStudents[myStudents.length] = "hashim";


//معرفة نوع ال array 
let type = typeof myStudents;
