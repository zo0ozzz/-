function solution(arr) {
//     let 최대공약수 = 1;
    
//     for(i = 1; i <= Math.min(...arr); i++) {
//         if(isTrue(arr, i)) {
//             최대공약수 = i;
//         }
//     }
    
//     let answer = 1;
    
//     for(item of arr) {
//         answer = answer * item / 최대공약수
//     }
    
//     return answer * 최대공약수;
// }

// function isTrue(arr, divider) {
//         return arr.reduce((acc, item) => {
//             if(item % divider === 0) {
//                 acc = acc && true;
//             }
//             else {
//                 acc = acc && false;
//             }
            
//             return acc;
//         }, true)
    let answer = Math.max(...arr);
    
    while(true) {
        if(isAllTrue(arr, answer)) {
            break;
        }
        else {
            answer++;
        }
    }
    
    return answer;
    
    
    function isAllTrue(arr, thing) {
        return arr.reduce((acc, item) => {
            if(thing % item === 0) {
                acc = acc && true;
            }
            else {
                acc = acc && false;
            }
            
            return acc;
        }, true)
    }
    }