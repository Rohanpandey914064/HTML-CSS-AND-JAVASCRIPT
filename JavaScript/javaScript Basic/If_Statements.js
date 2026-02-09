let dbPassword = "1234"; //from database
let enteredPassword = "1234";
let enteredUsername = "Rohan pandey";

if(enteredPassword === dbPassword){
    console.log("Welcome "+enteredUsername);
}else{
    console.log("Wrong password!");
}


let language = "hahy";
if(language === "spanish"){
    console.log("Bienvenido!");
}else if(language === "german"){
    console.log("Moin! Servus! Moin!");
}else if(language === "english"){
    console.log("Welcome!");
}else{
    console.log("We don't provide: "+language);
}

//Nested If Statements
let isLoggedIn = true;
let isAdmin = false;

if(isLoggedIn){
    console.log("Welcome, user!");
    if(isAdmin){
        console.log("Access to admin panel granted.");
    }else{
        console.log("Access to use dashboard granted.");
    }
}else{
    console.log("Please log in to continue");
}