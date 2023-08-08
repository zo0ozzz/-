function solution(s){
    const countP = s.match(/p/gi)?.length;
    const countY = s.match(/y/gi)?.length;
    
    if(countP === null && countY === null) {
        return true;
    }
    
    if(countP === countY) {
        return true;
    }
    else {
        return false;
    } 
}