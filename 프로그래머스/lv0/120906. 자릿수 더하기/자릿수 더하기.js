function solution(n) {
    const nToString = ('' + n);
    
    let sum = 0;
    
    for(item of nToString) {
        sum += +item;    
    }
    
    return sum;
    
    // return ('' + n).split('').reduce((acc, cur) => acc + (+cur), 0)
}