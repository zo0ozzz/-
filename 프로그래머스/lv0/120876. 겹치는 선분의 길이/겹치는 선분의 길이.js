function solution(lines) { 
//     const min = lines.sort(([item1, _1], [item2, _2]) => item1 - item2)[0][0];
//     const max = lines.sort(([_1, item1], [_2, item2]) => item2 - item1)[0][1];
    
//     const totalLength = max - min;
//     const totalArray = [];
    
//     for(i = min; i <= max; i++) {
//         totalArray.push(i);
//     }
    
//     // 이제 하나도 안 겹치는 부분을 구해보자
                            
    const newArr = lines.reduce((acc, cur) => {
        let arr = [];
        
        for(i = cur[0]; i <= cur[1]; i++) {
            arr.push(i);
        }
        
        acc = [...acc, arr]
        
        return acc;
    }, [])

    const [arr1, arr2, arr3] = newArr;
    
    let result = 0;
    
    let common1 = [];
    
    for(item1 of arr1) {
        for(item2 of arr2) {
            if(item1 === item2) {
                common1.push(item1)
            }
        }
    }
    
    if(common1.length >= 2) {
         result += common1.length - 1;
    }
    
    let common2 = [];
    
    for(item1 of arr2) {
        for(item2 of arr3) {
            if(item1 === item2) {
                common2.push(item1)
            }
        }
    }
    
    if(common2.length >= 2) {
         result += common2.length - 1;
    }
    
    let common3 = [];
    
    for(item1 of arr1) {
        for(item2 of arr3) {
            if(item1 === item2) {
                common3.push(item1)
            }
        }
    }
    
    if(common3.length >= 2) {
         result += common3.length - 1;
    }
    
    let common4 = [];
    
    for(item1 of arr1) {
        for(item2 of arr2) {
            for(item3 of arr3) {
                if(item1 === item2 && item1 === item3) {
                    common4.push(item1)
                }
            }
        }
    }
    
    if(common4.length >= 2) {
        result -= (common4.length - 1) * 2;
    }
    
    return result;
}