function limitedRepeat(){
    let counter = 0;
    let id = setInterval(()=>{console.log('hi again');
                            counter++;
                            if(counter>=5){
                                clearInterval(id);
                            }},1000)
}

limitedRepeat();