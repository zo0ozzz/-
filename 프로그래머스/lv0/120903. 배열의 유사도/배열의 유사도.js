function solution(s1, s2) {
    var answer = 0;
    
    for(el1 of s1) {
        for(el2 of s2) {
            if(el1 === el2) {
                answer++ 
            }
        }
    }
    
    return answer;
}