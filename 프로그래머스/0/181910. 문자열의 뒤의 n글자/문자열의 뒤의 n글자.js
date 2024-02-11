function solution(my_string, n) {
    var answer = '';
    
    const newN = 0 - n;
    const newString = my_string.slice(newN);
    answer = newString;
    return answer;
}