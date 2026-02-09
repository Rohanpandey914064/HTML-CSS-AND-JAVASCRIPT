const student = {
    name : "Rohan Pandey",
    age : 19,
    gmail : "rohanrock4019@gmail.com"
}

console.log(student.name);//to access element
console.log(student["name"]);
console.log(student.age);

console.log(student);

//upadate properties
student.name = "Raunak Pandey";
student["age"] = 15;
console.log(student);


//add properties
student.hobby = "chess";
student["gender"] = "male";
console.log(student);


//delete properties
delete student.name;
delete student["age"];
console.log(student);
