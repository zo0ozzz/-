function solution(n) {
    let 약수 = [];
    
    for(i = 1; i <= n; i++) {
        if(n % i === 0) {
            약수.push(i);
        }
    }
    
    return 약수.length
    
    
}