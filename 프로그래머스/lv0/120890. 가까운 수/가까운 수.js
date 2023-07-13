function solution(array, n) { 
    function howNear(n, element) {
        return Math.abs(n - element)
    }
    
    const newArray = array.sort((a, b) => howNear(n, a) - howNear(n, b))
    
    if(howNear(n, newArray[0]) === howNear(n, newArray[1])) {
        let arr = [];
    
        for(i = 0; i < newArray.length; i++) {
            if(howNear(n, newArray[i]) === howNear(n, newArray[0])) {
                arr.push(newArray[i]);
            }
        }

        return Math.min(...arr);    
    } else {
        return newArray[0]
    }
    
    
}
