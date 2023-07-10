function solution(n) {
    // 어떤 수의 약수를 구하는 방법
    // - 이거 훈련했었지!
    
    let array = [];
    
    for(i = 1; i <= n; i++) {
        array.push(i);
    }
    
    const answer = array.reduce((acc, item) => {
        let count = 0;
                
        for(i = 1; i <= item; i++) {
            if(item % i === 0) {
                count++
            }
            
            if(count === 3) {
                acc.push(item)
                
                break;
            }    
        }
        
        return acc
    }, [])
    
    return answer.length;
    
//     let count1 = 0;
    
//     for(i = 1; i <= n; i++) {
//         let count2 = 0;
        
//         for(j = 1; j <= i; j++) {
//             if(i % j === 0) {
//                count2++;
                
//                 if(count2 === 3) {
//                     count1++
                    
//                     continue;
//                 }
//             }
//         }
//     }
    
//     return count1;
}