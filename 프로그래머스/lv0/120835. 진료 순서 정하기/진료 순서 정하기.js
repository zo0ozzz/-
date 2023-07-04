function solution(emergency) {
    var answer = [];
    
    const sortedArray = [...emergency].sort((a, b) => b - a)
    
    let result = [];
    
    sortedArray.forEach((item1, index1) =>  {
        emergency.forEach((item2, index2) => {
            if(item1 === item2) {
                result[index2] = (index1 + 1);      
            }
        })
    })
    
    return result;
}