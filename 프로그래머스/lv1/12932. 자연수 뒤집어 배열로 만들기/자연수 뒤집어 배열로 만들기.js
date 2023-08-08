function solution(n) {
    const arr = n.toString().split('');

    return arr.reduce((acc, cur) => {
        const curToNumber = Number(cur);
        
        acc.unshift(curToNumber);
    
        return acc;
    }, [])
}