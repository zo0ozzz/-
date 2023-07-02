function solution(my_string, n) {
    var answer = '';
    
    // str 각 문자를 n만큼 반복한 문자열 출력.
    // 각 문자.
    
    
    const a = my_string.split('');
    for(i = 0; i < a.length; i++){
        answer += a[i].repeat(n)
    }
    
    return answer;
}