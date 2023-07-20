function solution(my_str, n) {
    const arr = my_str.split('');
    
    let result = [];
    
    while(arr.length > 0) {
        result.push(arr.splice(0, n).join(''));
    }
    
    return result;
}