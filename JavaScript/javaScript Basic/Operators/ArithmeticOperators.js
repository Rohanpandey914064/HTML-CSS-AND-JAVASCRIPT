let a = 15;
let b = 5;

console.log(a + b);

console.log(a - b);

console.log(a * b);

console.log(a / b);

console.log(a % b);

console.log(a ** b); //a^b


let age = 18;

age += 1;
age -= 1;
age *= 1;
age /= 1;
age %= 1;

age++;
age--;

//coercion (Implicit type conversion)
console.log("10" + 4);  //output - "104"
console.log("10" - 4);  //output - 6
console.log("10" * 4);  //output - 40
console.log("10" / 4);  //output - 2.5
console.log("abc" - 4);  //output - "NaN"
console.log(true + true);  //output - 2
console.log(false + false);  //output - 0
console.log(true + 5 + "10");  //output - "610"
console.log("10" + true + 5);  //output - "10true5"
console.log(+"10" + 5);  //output - "15"
console.log(+"10" + +"25");  //output - "35"


//Type conversion

let text = "1234";
text = Number(text);
console.log(typeof text);

text = String(text);
console.log(typeof text);

text = Boolean(text);
console.log(typeof text);


