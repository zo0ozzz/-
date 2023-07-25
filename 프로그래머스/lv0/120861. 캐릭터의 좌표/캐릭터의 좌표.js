function solution(keyinput, board) {
    const limitX = Math.floor(board[0] / 2);
    const limitY = Math.floor(board[1] / 2);
    
    let x = 0;
    let y = 0;
    
    for(item of keyinput) {
        switch (item) {
            case 'up':
                y !== limitY ? y += 1 : null;
                
                break;
            case 'right':
                x !== limitX ? x += 1 : null;
                
                break;
            case 'down':
                y !== 0 - limitY ? y -= 1 : null;
                
                break;
            case 'left':
                x !== 0 - limitX ? x -= 1 : null;
                
                break;
        }
    }
    
    return [x, y];
}