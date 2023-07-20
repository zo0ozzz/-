function solution(my_str, n) {
    const arr = my_str.split('');
    
    let result = [];
    
    for(i = 0; i <= ((arr.length - 1) / n) ; i++) {
        result.push(arr.slice(i * n, (i + 1) * n).join(''));
    }
    
    return result;
            
//     const arr = my_str.split('');
    
//     let result = [];
    
//     while(arr.length > 0) {
//         result.push(arr.splice(0, n).join(''));
//     }
    
//     return result;
}