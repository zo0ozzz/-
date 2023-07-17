function solution(my_string) {
//     let result = parseInt(my_string[0]);
    
//     for(i = 1; i <= (my_string.length - 1) / 4; i++) {
//         if(my_string[4 * i - 2] === '+') {
//             result += parseInt(my_string[4 * i])
//         } 

//         if(my_string[4 * i - 2] === '-') {
//             result -= parseInt(my_string[4 * i])
//         }
//     }

//     return result;        
    
    // my_string.match(/\+\d/g)

    
    const arr = my_string.split(' ');
    
    let result = 0;

    arr.forEach((item, index) => {
        if(index === 0) {
             result += parseInt(item)
        }
        
        if(item !== '+' && item !== '-') {
            if(arr[index - 1] === '+') {
                result += parseInt(item)
            }
            
            if(arr[index - 1] === '-') {
                result -= parseInt(item)                
            }
        }    
    })
    
    return result;
    
}