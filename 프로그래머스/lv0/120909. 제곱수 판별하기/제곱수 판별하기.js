function solution(n) { 
    const 제곱근 = Math.sqrt(n);
    
    return Number.isInteger(제곱근) ? 1 : 2;    

//     const 제곱근 = Math.sqrt(n);
    
//     return Math.floor(제곱근) === 제곱근 ? 1 : 2;    
 }