function solution(my_string) {
    function boolean(element) {
        return element !== 'a' && element !== 'e' && element !== 'i' && element !== 'o' && element !== 'u';  
    }
    
    const toArray = my_string.split('');
    
    const filtered = toArray.filter(item => boolean(item));
    
    return filtered.join('');
}