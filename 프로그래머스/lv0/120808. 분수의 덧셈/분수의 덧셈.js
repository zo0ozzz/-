function solution(numer1, denom1, numer2, denom2) {
    let arr1 = [];
    let arr2 = [];
    
    for(i = 1; i <= denom1; i++) {
        if(denom1 % i === 0) {
            arr1.push(i)
        } 

        continue;
    }
    
    for(i = 1; i <= denom2; i++) {
        if(denom2 % i === 0) {
            arr2.push(i)
        }

        continue;
    }
    
    const arr = arr1.filter(item => {
        for(i = 0; i < arr2.length; i++) {
            if(item === arr2[i]) {
                return item;
            }
        }
    })
    
    console.log(arr1, arr2, arr)
    
    const copyArr = [...arr];
    const 분모최대공약수 = copyArr.sort().pop();
        
    const value1 = denom1 / 분모최대공약수;
    const value2 = denom2 / 분모최대공약수;
    
    const 분모최소공배수 = 분모최대공약수 * value1 * value2;
    
    const 분자환산 = numer1 * (분모최소공배수 / denom1) + numer2 * (분모최소공배수 / denom2);
    const 분모환산 = 분모최소공배수;
    
    const reverseArr = [...arr].reverse();
    
    let result분자;
    let result분모;
     
    for(i = 0; i < reverseArr.length; i++) {
        const divider = reverseArr[i];
        
        if(분자환산 % divider === 0) {
            result분자 = 분자환산 / divider;
            result분모 = 분모환산 / divider;
            
            break;
        }
    }
     
    return [result분자, result분모]
}