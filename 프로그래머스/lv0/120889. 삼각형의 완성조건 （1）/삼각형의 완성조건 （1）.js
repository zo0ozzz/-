function solution(sides) {
    sides.sort((a, b) => a - b);
    
    const is = sides[2] < sides[0] + sides[1];
    
    return is ? 1 : 2;
}