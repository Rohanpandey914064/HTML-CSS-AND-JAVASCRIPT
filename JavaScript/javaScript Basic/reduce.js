const prices = [4, 8, 15, 16, 23, 42]

const totalPrice = prices.reduce((total,currentPrice)=>{
    console.log(`${total} + ${currentPrice} = ${total + currentPrice}`);
    return total + currentPrice;
},0);
console.log(totalPrice);

//2nd example
const words = ['Hello', ' ', 'Rohan'];

const String = words.reduce((word, current)=>{
    return word + current;
},'');
console.log(String);

//3rd example
const fruits = ['apple', 'banana', 'apple','orange', 'banana', 'apple'];

const count = fruits.reduce((tally, fruit)=>{
    tally[fruit] = (tally[fruit] || 0)+1;
    return tally;
},{});
console.log(count);

//4rd example
const products = [
    {name:"Laptop", price:499, color: "white",inShoppingCart: true},
    {name:"Smartphone", price:899, color: "black",inShoppingCart: false},
    {name:"Headphones", price:50, color: "white",inShoppingCart: true},
    {name:"Keyboard", price:210, color: "blue",inShoppingCart: true},
];

const cartTotal = products.filter(p => p.inShoppingCart)
                        .map(p => p.price * 0.5)
                        .reduce((total , current)=>{
                            return total + current;
                        },0);
                        
console.log(cartTotal);