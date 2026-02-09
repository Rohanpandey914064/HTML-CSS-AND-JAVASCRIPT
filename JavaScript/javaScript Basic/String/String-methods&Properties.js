let myString = "Rohan pandey son of kamlesh pandey";

//get number of characters
console.log(myString.length);

//to get upperCase and LowerCase
console.log(myString.toLowerCase());
console.log(myString.toUpperCase());

//to get character at a specific position
console.log(myString.charAt(0));
console.log(myString[0]);

//to find the position of a character or word
console.log(myString.indexOf("son"));

// replace part of the string
console.log(myString.replace("Rohan","Raunak"));

//remove whitespace from both ends
let text = "    hii , every one      ";
console.log(text.trim());

//to check character or word present in string
console.log(myString.includes("son"));

//to chech character or word start or end with this 
console.log(myString.startsWith('Rohan'));
console.log(myString.endsWith('pandey'));