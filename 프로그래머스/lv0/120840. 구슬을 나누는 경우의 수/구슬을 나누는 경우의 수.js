function solution(balls, share) {
    if(balls === share || balls === 1) {
        return 1;   
    }
    
    function 팩토리얼(ddd) {
        let init = 1;
        
        for(i = 1; i <= ddd; i++) {
            init = init * i;
        }
        
        return init;
    }
    
    const 분자 = 팩토리얼(balls);
    const 분모 = 팩토리얼(balls-share) * 팩토리얼(share)
    
    return Math.round(분자 / 분모)
}