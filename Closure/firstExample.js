function outer(){
    let counter = 0;
    function incrementCounter(){
        counter++;
        console.log(counter);
    }
    return incrementCounter;
}

const newFunction = outer();
newFunction();