function solution(sides) {
   // 기존의 변 중에 가장 긴 변이 있을 때.
    const [maxLength, length] = sides.sort((a, b) => b - a);
    
    let arr = [];
    
    let newLength = maxLength - length + 1;
    
    while(newLength < maxLength) {
        arr.push(newLength);
        
        newLength++
    }
    
    // 새로운 변이 가장 길 때.
    
    let arr2 = [];
    
    let possible = maxLength;
    
    while(possible < maxLength + length) {
        arr2.push(possible);
        
        possible++
    }
    
    return arr.length + arr2.length;
}