function solution(num_list) { 
    const 짝수개수 = num_list.filter(item => item % 2 === 0).length;
    
    return [짝수개수, num_list.length - 짝수개수]
    
    
    
//     let countZero = 0;
    
//     const 짝수 = num_list.filter((item) => {
//         if(item === 0) {
//             countZero++
//         }
        
//         if(item !== 0 && item % 2 === 0) {
//             return item;
//         }
//     })
    
//     return [짝수.length, num_list.length - countZero - 짝수.length]
}