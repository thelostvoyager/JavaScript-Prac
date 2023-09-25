function outer(){
    let counter=0;
    function incrementCounter(){
        counter++;
    }
    incrementCounter(); //Function called after it was declared
  console.log(counter); //counter logs 1
  // We can see counter incremented 
}
outer();

