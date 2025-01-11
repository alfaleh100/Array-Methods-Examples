
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


//طباعة كل الطلاب الذين تزيد طول اسمائهم عن 5
console.log(myStudents.filter( s=> s.length > 5))
//طباعة طول كل الاسماء للطلاب
myStudents.forEach( s => console.log(s.length))
//ايجاد اول اسم يتنهي بr
console.log(myStudents.find(s => s.endsWith("r")))