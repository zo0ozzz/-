function solution(n) {
    const nString = String(n);
    
    let answer = 0;
    
    for(i = 0; i < nString.length; i++) {
        answer += parseInt(nString[i])
    }
    
    return answer;
}