function solution(lines) { 
    const newArr = lines.reduce((acc, cur) => {
        let arr = [];
        
        for(i = cur[0]; i <= cur[1]; i++) {
            arr.push(i);
        }
        
        acc = [...acc, arr]
        
        return acc;
    }, [])
    
    const result = newArr.reduce((acc, cur) => {
        let arr = [];
        
        for(item1 of acc) {
            for(item2 of cur) {
                if(item1 === item2) {
                    arr.push(item1);
                }
            }
        }
        
        acc = arr;
        
        return acc;
    }, newArr[0])
    
    console.log(result)
}