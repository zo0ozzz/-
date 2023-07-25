function solution(keyinput, board) {
    const limitX = Math.floor(board[0] / 2);
    const limitY = Math.floor(board[1] / 2);
    
    let arr = [0, 0]
    
    for(item of keyinput) {
        switch (item) {
            case 'up':
                if(arr[1] === limitY) {
                    break;
                }
                
                arr[1] += 1;    
                break;
            case 'right':
                if(arr[0] === limitX) {
                    break;
                }
                
                arr[0] += 1;
                break;
            case 'down':
                if(arr[1] === 0 - limitY) {
                    break;
                }
                
                arr[1] -= 1;
                break;
            case 'left':
                if(arr[0] === 0 - limitX) {
                    break;
                }
                
                arr[0] -= 1;
                break;
        }
        
        console.log(arr);
    }
    
    return arr;
}