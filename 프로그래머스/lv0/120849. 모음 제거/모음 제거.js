function solution(my_string) {
    const regex = /[aeiou]/g;
    
    const filtered = my_string.replace(regex, '');
    
    return filtered;          

//     const regex = /a|e|i|o|u/g;
    
//     const filtered = my_string.replace(regex, '');
    
//     return filtered;          

//     function boolean(element) {
//         return element !== 'a' && element !== 'e' && element !== 'i' && element !== 'o' && element !== 'u';  
//     }
    
//     const toArray = my_string.split('');
    
//     const filtered = toArray.filter(item => boolean(item));
    
//     return filtered.join('');
}