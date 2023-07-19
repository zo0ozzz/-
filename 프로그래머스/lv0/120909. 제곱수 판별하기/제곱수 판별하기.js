function solution(n) {
    const 제곱근 = Math.sqrt(n);
    
    return Math.floor(제곱근) === 제곱근 ? 1 : 2;    
 }