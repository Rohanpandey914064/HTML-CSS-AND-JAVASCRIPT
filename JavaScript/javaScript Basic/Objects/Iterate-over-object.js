const student = {
    name : "Rohan Pandey",
    age : 19,
    gmail : "Rohanrock4019@gmail.com"
}


//first way 
for(const key in student){
    console.log(key);
    console.log(student[key]);
    console.log(key + ": " + student[key]);
    console.log("------------------")
}


//second way to use Oject.keys()
const studentKeys = Object.keys(student);
studentKeys.forEach((key)=>{
    console.log(key);
    console.log(student[key]);
})
console.log('------------------');


//3rd way to use Oject.values()
Object.values(student).forEach((v)=>{
    console.log(v);
})


//4rd way to use Object.entries()
Object.entries(student).forEach((entry) =>{
    let key = entry[0];
    let value = entry[1];
    console.log(key + ": " + value);
})