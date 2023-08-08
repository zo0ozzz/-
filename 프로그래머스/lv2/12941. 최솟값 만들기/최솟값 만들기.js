function solution(A,B){
//     let sum = 0; 
//     const count = A.length;
    
//     for(i = 1; i <= count; i++) {
//         const fromA = Math.min(...A);
//         const fromB = Math.max(...B);
        
//         sum += fromA * fromB;
        
//         A.splice(A.indexOf(fromA), 1);
//         B.splice(B.indexOf(fromB), 1);
//     }
    
//     return sum;
    
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    
    let sum = 0;
    
    for(i = 0; i < A.length; i++) {
        sum += A[i] * B[i];
    }
    
    return sum;
}