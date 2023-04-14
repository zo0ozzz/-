function solution(arr) {
    var answer = 0;
    
    arr.forEach(elem => {
        answer += elem    
    })
    
    answer = answer / arr.length
    
    return answer;
}