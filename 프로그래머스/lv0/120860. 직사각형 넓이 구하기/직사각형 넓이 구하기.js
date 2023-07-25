function solution(dots) {
    let x = [];
    let y = [];
    
    for(item of dots) {
        x.push(item[0]);
        y.push(item[1]);
    }
    
    return Math.abs(Math.max(...x) - Math.min(...x)) * Math.abs(Math.max(...y) - Math.min(...y))
    
//     let result = 0;
    
//     for(item of dots) {
//         if(dots[0][0] !== item[0] && dots[0][1] !== item[1]) {
//             result = Math.abs(dots[0][0] - item[0]) * Math.abs(dots[0][1] - item[1])
//             break;
//         }
//     }
    
//     return result;
    
   // return dots.reduce((acc, cur) => {       
   //      if(dots[0][0] !== cur[0] && dots[0][1] !== cur[1]) {
   //          acc = Math.abs(dots[0][0] - cur[0]) * Math.abs(dots[0][1] - cur[1])
   //      } 
   //  return acc
   // }, 0)
}