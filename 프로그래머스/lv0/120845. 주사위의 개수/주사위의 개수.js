function solution(box, n) {
    // ~의 최댓값 최솟값을 구하는 방식.
    // n * 개수 <= 길이. 여기서 n의 최댓값.
    
    const [가로, 세로, 높이] = box;
    
    const result = box.reduce((acc, item) => {
        let i = 1;
        
        while(n * i <= item) {
            i = i + 1;
        }
        
        acc = acc * (i - 1);
        
        return acc;
    }, 1)
    
    return result;
}