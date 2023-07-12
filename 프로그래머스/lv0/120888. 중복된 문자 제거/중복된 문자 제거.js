function solution(my_string) {
    const toArray = my_string.split('');
    
    const unique = [...new Set(toArray)];
    
    const toString = unique.join('')
    
    return toString;
}