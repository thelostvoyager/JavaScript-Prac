function promised (val){
    let promise = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(val)
      },2000)
    })
    return promise;
  }
  const createPromise = promised('wait for it...');
  createPromise.then((val) => console.log(val));