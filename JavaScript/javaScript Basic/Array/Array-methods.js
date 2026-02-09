let colors = ['red', 'green', 'blue' , 'yellow', 'purple'];
console.log(colors);

//this method remove the given index that are you give in first and section number give how many element you want to remove
colors.splice(1,1); //means remove index 1 and remove 1 element
console.log(colors);

//(indexOf())you want to remove element with they name not index so use indexOf function with splice()

let index = colors.indexOf("blue");
if(index !== -1){
    colors.splice(index , 1);
}
console.log(colors);

//(includes()) they check element present in array or not
console.log(colors.includes("red"));


//in splice() function 3rd parameter use then they replace value 
colors.splice(1,1,"rohan");
console.log(colors);
