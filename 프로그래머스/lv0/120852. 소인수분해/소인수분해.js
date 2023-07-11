function solution(n) {
    let i = 2;
    
    let arr = [];
    
    while(i <= n) {
        if(n % i === 0) {
            arr.push(i);
            n = n / i;
        }
        else {
            i++
        }
    }
    
    return [...new Set(arr)];
    
    
//     function isSosu(num) {
//         let count = 0;
        
//         for(i = 1; i <= num; i++) {
//             if(num % i === 0) {
//                 count++
                
//                 if(count === 3) {
//                     break;
//                 }
//             }
//         }    
    
//         if(count === 2) {
//             return true
//         } 
            
//         return false;
//     }
        
//     let yaksu = [];
    
//     for(i = 1; i <= n; i++) {
//         if(n % i === 0) {
//             yaksu.push(i);
//         }   
//     }
    
//     return [...new Set(yaksu)].filter(item => isSosu(item))
}

