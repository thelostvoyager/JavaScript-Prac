function addByX(x){
    let high = x;
    function add(start){
        console.log(start+high);
        return high + start;
    }
    return add;
}
const addByTwo= addByX(2);
addByTwo(1);
addByTwo(2);