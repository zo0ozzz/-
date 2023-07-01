function solution(slice, n) {
    for(p = 1; ; p++) {
        if(slice * p / n >= 1) {
            return p;
            
            break;
        }
        
        continue;
    }
    
    p >= n / slice;
}