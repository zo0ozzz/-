function solution(n) {
    let arr = [];
    let i = 1;
    
    while(arr.length <= n - 1) {
        const is = i.toString().includes('3');
        
        if(i % 3 !== 0 && !is) {
            arr.push(i)        
        }    
        
        i++
    }
    
    return arr[arr.length - 1];
    
}