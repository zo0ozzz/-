function solution(s) {
    let result = [];
    
    for(item of s) if(s.indexOf(item) === s.lastIndexOf(item)) result.push(item)
    
    return result.sort().join('');
    
//     const unique = [...new Set(s.split(''))];
    
//     const result = unique.reduce((acc, cur) => {
//         const reg = new RegExp(cur, 'g');
        
//         const count = s.match(reg).length;
        
//         if(count === 1) acc.push(cur);
        
//         return acc;
//     }, []);
    
//     return result.length !== 0 ? result.sort().join('') : '';
    
//     const unique = [...new Set(s.split(''))];
    
//     let arr = [];
    
//     for(item of unique) {
//         let count = 0;
        
//         for(i = 0; i < s.length; i++) {
//             if(item === s[i]) count++
            
//             if(count === 2) break;
//         }
//         if(count === 1) arr.push(item)
//     }
    
//     if(arr.length === 0) return '';
    
//     return arr.sort().join('');    
}