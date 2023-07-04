function solution(money) {
    return [Math.floor(money / 5500), money % 5500]
    
//     if(money < 5500) {
//         return [0, money]
//     }
    
     
//     for(i = 1; ; i++) {
//         const rest = money - 5500 * i;
//             if(rest >= 0 && rest < 5500) {
//                 return [i, rest];
//             }
//             continue
//         }
    
    // return [Math.floor(money / 5500), money % 5500]
    
//     let count = 0;
    
//     while(money >= 5500) {
//         money = money - 5500;
//         count++
//     }
    
//     return [count, money]
    
    
}