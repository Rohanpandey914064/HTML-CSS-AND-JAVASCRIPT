const students = ['Ruchi' , 'Rohan' , 'Arpit' , 'Shivam'];
for(let i = 0; i < students.length; i++){
    sayHello(students[i]);
}

function sayHello(x){
    console.log("Hello " + x);
}
console.log("---------------------------------------");

//forEach loop
students.forEach(function(student){
    console.log(student);
});

students.forEach(function(student, i , arr){
    arr[i] = student.toUpperCase();
});
console.log(students);