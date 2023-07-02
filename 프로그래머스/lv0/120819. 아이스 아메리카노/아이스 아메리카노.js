function solution(money) {
    // 상수 자원에서 최대로. -> 특정 조건을 만족하는 마지막 변수.
    
    if(money < 5500) {
        return [0, money]
    }
    
     
    for(i = 1; ; i++) {
        const rest = money - 5500 * i;
            if(rest >= 0 && rest < 5500) {
                return [i, rest];
            }
            continue
        }   
}