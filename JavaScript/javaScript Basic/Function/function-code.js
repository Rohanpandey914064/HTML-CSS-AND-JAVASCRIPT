function sayHello(){
    console.log("I'm Rohan");
}

sayHello();

//Parameter & Arguments

function yourName(userName){ // In the () call Parameter
    console.log("Hello "+ userName);
}

yourName("Rohan Pandey"); //// In the () call Arguments

function calculator(num1 , num2){
    console.log("Addition "+ (Number)(num1 + num2));
    console.log("Subtraction "+(Number) (num1 - num2));
    console.log("Multiplication "+ num1 * num2);
    console.log("division "+ num1 / num2);
}

calculator(10,5);