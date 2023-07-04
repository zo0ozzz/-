function solution(rsp) {
    // 가위 2 바위 0 보 5
    
    let victory = ''
    
    for(i = 0; i < rsp.length; i++) {
        switch(rsp[i]) {
            case '2':
                victory += '0'
                
                break;
            case '0':
                victory += '5'
                
                break;
            case '5':
                victory += '2'
                
                break;
        }
    }
    
    return victory
}