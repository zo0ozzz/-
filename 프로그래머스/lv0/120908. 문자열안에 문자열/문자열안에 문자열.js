function solution(str1, str2) {
    const reg = new RegExp(str2);
    
    return reg.test(str1) ? 1 : 2;
}