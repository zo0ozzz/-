function solution(dots) {
    let result = 0;
    
    for(item of dots) {
        if(dots[0][0] !== item[0] && dots[0][1] !== item[1]) {
            result = Math.abs(dots[0][0] - item[0]) * Math.abs(dots[0][1] - item[1])
            break;
        }
    }
    
    return result;
    
//    return dots.reduce((acc, cur) => {
//        let result = 0;
       
//     if(acc[0] !== cur[0] && acc[1] !== cur[1]) {
//         result = Math.abs(acc[0] - cur[0]) * Math.abs(acc[1] - cur[1])
//     } 
       
//     return result;  
//    }, dots[0])
}