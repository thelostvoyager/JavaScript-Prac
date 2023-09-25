function copyArrayAndManipulate(array,instructions){
    const output =[];
    for(let i = 0;i<array.length;i++){
        output.push(instructions(array[i]));
    }
    return output;
}
function multiplyBy2(input){
    return input *2;
}
const result = copyArrayAndManipulate([1,2,3],multiplyBy2());
console.log(result);