function solution(n,a,b) {
    let count = 1;
    
    while(a !== b) {
        a = a % 2 === 0 ? a / 2 : (a + 1) / 2;
        b = b % 2 === 0 ? b / 2 : (b + 1) / 2;
        
        count++
    }
    
    return count - 1;
}