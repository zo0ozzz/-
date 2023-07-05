function solution(numbers, k) {
    const indexK = 2 * (k - 1)
    
    const repeatNumber = Math.ceil((indexK + 1) / numbers.length)
    
    let newArray = [];
    for(i = 0; i < repeatNumber; i++) {
        newArray.push(...numbers)
    }
    
    return newArray[indexK]
}