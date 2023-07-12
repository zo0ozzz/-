function solution(my_string) {
    const toArray = [...my_string];
    
    return toArray.filter((item, index) => index === my_string.indexOf(item)).join('');
//     const toArray = my_string.split('');
    
//     const unique = [...new Set(toArray)];
    
//     const toString = unique.join('')
    
//     return toString;
}