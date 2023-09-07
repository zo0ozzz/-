function solution(n){
//     let result = 0;
    
//     for(i = 1; i++;) {
//         if(Math.pow(2, i) <= n && n < Math.pow(2, i + 1)) {
//             result = i;
            
//             break;
//         }
//     }
    
//     return n - Math.pow(2, result) + 1
    let jumpCount = 0;
    
    while(n > 1) {
        if(n % 2 === 0) {
            n = n / 2;
        }
        else {
            jumpCount++
            n = (n - 1) / 2;
        }
        
    }
    return jumpCount + 1
}