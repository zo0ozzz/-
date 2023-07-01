function solution(num_list) { 
    const 짝수 = num_list.filter(item => item % 2 === 0);
    const 홀수 = num_list.filter(item => item % 2 !== 0);
    
     console.log(num_list);
    console.log(짝수)
    console.log(홀수)
    
    return [짝수.length, 홀수.length]
    
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