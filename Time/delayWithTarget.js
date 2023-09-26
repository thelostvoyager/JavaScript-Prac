function delayCounter(target,wait){
    let current = 1;
    function solution(){
      let id = setInterval(()=>{
        if(current<=target){
          console.log(current);
          current++;
        }else{
          clearInterval(id);
        }
      },wait)
    }
    return solution;
  }
  
  const countLogger = delayCounter(3,1000)
  countLogger();