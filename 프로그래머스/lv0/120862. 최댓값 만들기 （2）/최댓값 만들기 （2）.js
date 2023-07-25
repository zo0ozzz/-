function solution(numbers) {
    let result = [];
    
    for(item1 of numbers) {
        for(item2 of numbers) {
            if(numbers.indexOf(item1) !== numbers.lastIndexOf(item2)) {
                result.push(item1 * item2);            
            }
        }
    }
    
   return Math.max(...result); 
}