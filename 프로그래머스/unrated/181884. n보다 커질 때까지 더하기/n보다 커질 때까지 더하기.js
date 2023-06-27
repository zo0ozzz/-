function solution(numbers, n) {
    let result = 0;
    
    for(i = 0; i < numbers.length; i++) {
        result += numbers[i];
        
        if(result > n) {
            break;
        }
    } 
    
    return result;
}

    