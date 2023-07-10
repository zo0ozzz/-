function solution(box, n) {
    // ~의 최댓값 최솟값을 구하는 방식.
    // - while(조건)이나 나누기 Math가 자주 활용됨.
    
    const [가로, 세로, 높이] = box;
    
    const diceAmount = Math.floor(가로 / n) * Math.floor(세로 / n) * Math.floor(높이 / n)
    
    return diceAmount;
    
//     const result = box.reduce((acc, item) => {
//         let i = 1;
        
//         while(n * i <= item) {
//             i = i + 1;
//         }
        
//         acc = acc * (i - 1);
        
//         return acc;
//     }, 1)
    
//     return result;
}