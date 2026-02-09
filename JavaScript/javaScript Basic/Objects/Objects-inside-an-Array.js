const products = [
    {name:"Laptop", price:499, color: "white"},
    {name:"Smartphone", price:899, color: "black"},
    {name:"Headphones", price:50, color: "white"},
    {name:"Keyboard", price:210, color: "blue"},
];

console.log(products[0].name);

//question to modify the price of all products
/*for(let i = 0; i < products.length; i++){
    products[i].price /= 2;
}*/
products.forEach((product)=>{
    product.price = product.price * 0.5;
})
console.log(products);
 