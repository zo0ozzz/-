function solution(board) {
    const 가로몇칸 = board[0].length;
    const 세로몇칸 = board.length;
    
    const 좌표들 = [];
    
    for(i = 0; i < 가로몇칸; i++) {
        for(j = 0; j < 세로몇칸; j++) {
            좌표들.push([i, j]);
        }
    }
    
    const bombs = board.reduce((acc, item1, index1) => {
        item1.forEach((item2, index2) => {
            if(item2 === 1) {
                acc.push([index2, index1]);
            }
        })
        
        return acc;
    }, [])
    
    if(bombs.length === 0){
        return 좌표들.length;
    }
    
    let result = 0;
    
    for(let [x1, y1] of 좌표들) {
        let count = 0;
        
        for(let [x2, y2] of bombs) {
            const 거리 = Math.sqrt((Math.abs(x1 - x2)) ** 2 + (Math.abs(y1 - y2)) ** 2);
            
            if(거리 > Math.sqrt(2)) {
                count++
            }
            
            if(count === bombs.length) {
                
                result++
            }
        }                        
    }
    
    return result;
    
}