const number = [1,2,3,4,5,6,7,8,9,10];

console.log(number.filter(n => n % 2 === 0));
console.log(number.filter(n => n < 2));
console.log(number);

//ex - 2nd
const products = [
    {name:"Laptop", price:499, color: "white"},
    {name:"Smartphone", price:899, color: "black"},
    {name:"Headphones", price:50, color: "white"},
    {name:"Keyboard", price:210, color: "blue"},
    {name:"mouse", price:150, color: "black"},
];

const affordableProducts = products.filter(product => product.price < 200);
console.log(affordableProducts);

const newArr = products.filter(product =>{
        return product.name.includes("phone") && product.price < 200 ;
    }
);
console.log(newArr);
