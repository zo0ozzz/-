function solution(n) {
    // 피자조각들 / n >= 1
    // p >= 1 * n / 7
    // 피자 개수는 정수여야 하니까,
    
    const pizza = Math.ceil(1 * n / 7);
    
    return pizza;
}