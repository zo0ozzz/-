function solution(n, t) {
    let quantity = n;
    
    for(i = 1; i <= t; i++) {
        quantity *= 2;  
    }
    
    return quantity;
}