function solution(s) {
    const unique = [...new Set(s.split(''))];
    
    let arr = [];
    
    for(item of unique) {
        let count = 0;
        
        for(i = 0; i < s.length; i++) {
            if(item === s[i]) count++
            
            if(count === 2) break;
        }
        if(count === 1) arr.push(item)
    }
    
    if(arr.length === 0) return '';
    
    return arr.sort().join('');    
}