const shopItems = document.querySelectorAll("ul > li");
shopItems.forEach((item)=>{
    item.style.background = "green";
    item.style.margin = "5px 0";
});

//2nd method to select all element
const shop = Array.from(document.getElementsByTagName("li"));
shop.forEach((item)=>{
    item.style.color = "red";
});

//3rd method to select all element
const shops = Array.from(document.getElementsByClassName("className"));
shops.forEach((item)=>{
    item.style.color = "red";
});