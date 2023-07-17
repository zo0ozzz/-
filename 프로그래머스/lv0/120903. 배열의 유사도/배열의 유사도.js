function solution(s1, s2) {
    const arr1 = [...new Set(s1)];
    const arr2 = [...new Set(s2)];
    
    let count = 0;
    
    for(item1 of arr1) {
        for(item2 of arr2) {
            if(item1 === item2) {
                count++
            }
        }
    }
    
    return count;
}