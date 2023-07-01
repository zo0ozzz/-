function solution(n) {
    // 피자조각들 = p * 6;
    // 한 사람이 먹는 피자 조각 = 피자조각들 / n;
    // p * 6 % n === 0;
    
    let p = 1;
    
    while(true) {
        if(p * 6 % n === 0) {
            return p;
            
            break;
        }
        
        p++
    }  
}