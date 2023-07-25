function solution(numbers) {
    let result = [];
    
    for(i = 0; i < numbers.length; i++) {
        for(j = i + 1; j < numbers.length; j++) {
            result.push(numbers[i] * numbers[j]);            
        }
    }
    
   return Math.max(...result);
    
//     let result = [];
    
//     for(item1 of numbers) {
//         for(item2 of numbers) {
//             if(numbers.indexOf(item1) !== numbers.lastIndexOf(item2)) {
//                 result.push(item1 * item2);            
//             }
//         }
//     }
    
//    return Math.max(...result); 
}