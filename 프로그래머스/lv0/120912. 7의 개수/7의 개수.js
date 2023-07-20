function solution(array) {
//     const str = array.join('');
    
//     let count = 0;
    
//     for(i = 0; i < str.length; i++) {
//         if('7' === str[i]) {
//             count++
//         }    
//     }
    
//     return count;
    
    return array.join('').match(/7/g).length;
}