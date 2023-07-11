function solution(n) {
    let yaksu = [];
    
    for(i = 1; i <= n; i++) {
        if(n % i === 0) {
            yaksu.push(i);
        }   
    }
    
    // console.log(yaksu.filter(item => isSosu(item)).sort())
    
    return [...new Set(yaksu)].filter(item => isSosu(item))
}

function isSosu(num) {
        let count = 0;
        
        for(i = 1; i <= num; i++) {
            if(num % i === 0) {
                count++
                
                if(count === 3) {
                    break;
                }
            }
        }    
    
    if(count === 2) {
        return true
    } 
            
    return false;
}