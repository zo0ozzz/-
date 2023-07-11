function solution(my_string) {
    const regex = /\d/g;
    
    const sum = my_string.match(regex).reduce((acc, item) => {
        acc = acc + parseInt(item);
        
        return acc;
    }, 0)
    
    return sum;
    
}