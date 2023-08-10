function solution(s) {
    const stack = []; // 빈 스택을 생성합니다. 중복된 문자를 제거하기 위해 사용할 스택입니다.
    
    for (let i = 0; i < s.length; i++) { // 문자열을 순회합니다.
        if (stack.length === 0 || stack[stack.length - 1] !== s[i]) {
            // 스택이 비어있거나 스택의 마지막 문자와 현재 문자가 다르면,
            stack.push(s[i]); // 현재 문자를 스택에 추가합니다.
        } else {
            // 스택의 마지막 문자와 현재 문자가 같으면,
            stack.pop(); // 스택에서 마지막 문자를 제거합니다.
        }
    }
    return stack.length === 0 ? 1 : 0; // 스택이 비어있으면 1을, 아니면 0을 반환합니다.
}