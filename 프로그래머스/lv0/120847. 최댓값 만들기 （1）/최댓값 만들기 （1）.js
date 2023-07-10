function solution(numbers) {
    const array = numbers.sort((a, b) => b - a);
    
    const max = array[0] * array[1];
    
    return max;
}