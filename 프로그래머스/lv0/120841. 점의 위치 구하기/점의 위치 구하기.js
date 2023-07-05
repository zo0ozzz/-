function solution(dot) {
    const [x, y] = dot;
    
    if(x * y > 0) {
        if(x > 0) {
            return 1
        }
        
        if(x < 0) {
            return 3
        }
    }
    
    if(x * y < 0) {
        if(x > 0) {
            return 4
        }
        
        if(x < 0) {
            return 2
        }
    }    
}