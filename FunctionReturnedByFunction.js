function createFunction(){
    function multiplyBy2(num){
        return num*2;
    }
    return multiplyBy2;
}
const generatedFunc = createFunction(); // here createFunction points to value of multiplyBy2 
const result = generatedFunc(3);