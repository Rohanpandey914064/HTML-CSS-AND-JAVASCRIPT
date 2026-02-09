function happyNewYear(){
    console.log("Happy new Year for all of you.");
}

function countdown(callback){
    for(let i = 10 ;i > 0; i--){
        console.log(i);
    }
    callback();
}

countdown(happyNewYear);