function solution(n) {
    let i = 1;
    
    while(팩토리얼(i) <= n) {
        i++
    }
    
    return i - 1;
}

function 팩토리얼(ddd) {
    let result = 1;
    
    for(i = 1; i <= ddd; i++) {
        result = result * i;
    }
  
    return result;
}


