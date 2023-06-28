function solution(array) {
    const arrayLength = array.length;
    
    if(arrayLength === 1) {
       return array[0]
    }
    
    const centerIndex = (arrayLength - 1) / 2;
        
    const newArray = [...array].sort((a, b) => a - b);
    
    const centerValue = newArray[centerIndex];
    
    return centerValue;
}