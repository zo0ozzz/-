function solution(brown, yellow) {
    let arr = [];
    
    for(i = yellow; i >= Math.sqrt(yellow); i--) {
        if(yellow % i === 0) {
            arr.push([i, yellow / i]);
        }
    }
    
    let result;
    
    for(item of arr) {
        if((item[0] + 2) * (item[1] + 2) - item[0] * item[1] === brown) {
            result = item;
            
            break;
        }
    }
    
    return [result[0] + 2, result[1] + 2]
    
}