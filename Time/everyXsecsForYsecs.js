function everyXsecsForYsecs(func,interval,duration){
    let currentDuration = 0;
    let id = setInterval(()=>{
      func()
      currentDuration = currentDuration+interval
      if(currentDuration>=duration){
        clearInterval(id);
      }
    },interval)
  }
  
  function theEnd() {
    console.log('This is the end!');
  }
  everyXsecsForYsecs(theEnd, 2000, 20000);
  