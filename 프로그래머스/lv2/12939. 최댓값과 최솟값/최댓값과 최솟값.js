function solution(s) {
//     const arr = s.split(' ').map(item => Number(item)).sort((a, b) => a - b)
    
//     return `${arr[0]} ${arr[arr.length - 1]}`
    
    const arr = s.split(' ');
    
    return Math.min(...arr) + ' ' + Math.max(...arr);
    
}

