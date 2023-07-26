function solution(spell, dic) {
    return dic.reduce((acc, cur) => {
        if(cur.length === spell.length) {
            let count = 0;
            
            for(i = 0; i < spell.length; i++) {
                const reg = new RegExp(spell[i], 'g');
                
                if((cur.match(reg))?.length === 1) {
                    count++
                } 
                
                if(count === cur.length) {
                    acc = 1;
                }
            }    
        }
        
    return acc
    }, 2)
}