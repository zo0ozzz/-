function solution(my_str, n) {
    return my_str.match(new RegExp(`.{1,${n}}`, 'g'));
    
//     let result = [];
    
//     for(i = 0; i < my_str.length; i += n) {
//         result.push(my_str.substr(i, n))    
//     }
    
//     return result;
    
//     const arr = my_str.split('');
    
//     let result = [];
    
//     for(i = 0; i < arr.length; i += n) {
//         result.push(arr.slice(i, (i + n)).join(''));
//     }
    
//     return result;
            
//     const arr = my_str.split('');
    
//     let result = [];
    
//     while(arr.length > 0) {
//         result.push(arr.splice(0, n).join(''));
//     }
    
//     return result;
}