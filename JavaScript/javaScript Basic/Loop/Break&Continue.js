for(let i = 0; i < 10 ; i++){
    console.log(i);
    if(i === 5){
        break;
    }
}

console.log("-------------------------");

for(let i = 0; i < 10 ; i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}

