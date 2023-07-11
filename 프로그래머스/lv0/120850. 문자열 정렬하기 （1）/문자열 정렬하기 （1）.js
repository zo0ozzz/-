function solution(my_string) {
    const regex = /[a-z]/g;
    
    const filtered = my_string.replace(regex, '');
    const toArray = filtered.split('');
    const toNumber = toArray.map(item => parseInt(item))
    const sorted = toNumber.sort();
    
    return sorted;
}