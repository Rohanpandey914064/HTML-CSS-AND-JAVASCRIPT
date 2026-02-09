const button = document.getElementById('my-button');
const counter = document.getElementById('counter');
let count = 0;
button.addEventListener("click",hello);

function hello(){
    count ++;
    counter.innerText = count;
}