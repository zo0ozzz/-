function solution(n, numlist) {
    return numlist.filter(item => item % n === 0)
    
//     const max = Math.max(...numlist);
    
//     let arr = [];
    
//     for(i = 1; i <= Math.floor(max / n); i++) {
//         arr.push(n * i)
//     }

//     return numlist.filter(item => arr.indexOf(item) !== -1);
}