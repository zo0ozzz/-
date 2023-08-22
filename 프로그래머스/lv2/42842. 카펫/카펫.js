function solution(brown, yellow) {
    let result;
    
    for(i = yellow; i >= Math.sqrt(yellow); i--) {
        if(yellow % i === 0) {
            // arr.push([i, yellow / i]);
            const 가로 = i;
            const 세로 = yellow / i;
            
            if(2 * (가로 + 세로 + 2) === brown) {
                result = [가로 + 2, 세로 + 2];
                break;
            }
        }
    }
    
//     let result;
    
//     for(item of arr) {
//         if(2 * (item[0] + item[1] + 2) === brown) {
//             result = item;
            
//             break;
//         }
//     }
    
    // return [result[0] + 2, result[1] + 2]
    
    return result;
}