function sayHello(){
    console.log(`Hello, my name is ${this.firstname} ${this.lastname}`);
}

const person = {
    firstname: "Rohan",
    lastname: "Pandey",
    sayHello: sayHello
}
const person2 = {
    firstname: "Raunak",
    lastname: "Pandey",
    sayHello: sayHello
}

person.sayHello();
console.log(person.firstname);
console.log(person.sayHello);
