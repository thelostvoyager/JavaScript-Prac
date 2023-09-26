function outer(){
    let counter = 0;
    function incrementCounter(){
        counter++;
    }
    return incrementCounter; //Note we are returning the function not calling it
}

const myNewFunction = ()=> outer();
myNewFunction();
myNewFunction();

// Backpack is formed and counter is available within the backpack of the function stored in myNewFunction (which is part of incrementCounter)