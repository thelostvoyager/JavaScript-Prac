const cAAM = (arr,ins) =>{
    const ans =[];
    for (let i=0;i<arr.length;i++){
      ans.push(ins(arr[i]));
    }
    return ans ;
  }
  const mulBy2 = (input) => input*2;
  
  
  const res = cAAM([6,9,12],mulBy2);
  console.log(res)