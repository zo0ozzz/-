function solution(x, n) {
    let answer = [];
    
    let i = 1;
    while(answer.length <= n - 1) {
        answer.push(x * i)
        i++
    }
    
    return answer;
}