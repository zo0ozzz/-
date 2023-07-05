function solution(numbers, k) {
    if(2 * (k - 1) < numbers.length - 1) {
        return numbers[2 *(k-1)]
    }
    
    const repeat = Math.ceil(2 * (k - 1) + 1 / numbers.length)
    
    let newArray = []
    
    for(i = 0; i < repeat; i++) {
        newArray.push(...numbers)
    }
    
    
    return newArray[2 * (k - 1)]
}