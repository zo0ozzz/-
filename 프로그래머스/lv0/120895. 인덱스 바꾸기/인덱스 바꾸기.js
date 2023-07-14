function solution(my_string, num1, num2) {
    const arr = my_string.split('');
    
    const item1 = arr[num1];
    const item2 = arr[num2];
    
    arr[num1] = item2;
    arr[num2] = item1;
    
    return arr.join('');
    
//     const copy = [...arr];
    
//     copy[num1] = item2;
//     copy[num2] = item1;
    
//     return copy.join('');
    
}