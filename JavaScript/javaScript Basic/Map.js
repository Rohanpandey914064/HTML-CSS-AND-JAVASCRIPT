const price = [4, 6, 15, 16, 23, 42];
const discountPrices = price.map((price)=>{
    return price * 0.5;
})
//const discountPrices = price.map(price => price * 0.5);
console.log(price);
console.log(discountPrices);

//example
const products = [
    {name:"Laptop", price:499, color: "white"},
    {name:"Smartphone", price:899, color: "black"},
    {name:"Headphones", price:50, color: "white"},
    {name:"Keyboard", price:210, color: "blue"},
];

const discounts = products.map((product) => {
        return {
            ...product,
            price: product.price * 0.5
        }
    }
)
console.log(products);
console.log(discounts);

const categorizedProducts = products.map((product) => {
        let category;
        if(product.price < 100) category = "Budget";
        else if ( product.price < 500) category = "Mid-range";
        else category = "premium";
        return {
            ...products,category
        };
    }
);

console.log(categorizedProducts);