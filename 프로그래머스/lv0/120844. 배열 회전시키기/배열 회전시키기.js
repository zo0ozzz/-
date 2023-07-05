function solution(numbers, direction) {
   if(direction === 'right') {
       let array = [];
       
       numbers.forEach((item, index) => {
           array[index + 1] = item;
       })
       
       array[0] = array[array.length - 1];
       array.pop();
       
       console.log(array)
       
       return array;
   }
    
    if(direction === 'left') {
        let array = [];
        
        const firstElement = numbers[0];
        
        numbers.forEach((item, index) => {    
            if(index === 0) {}
            
            array[index - 1] = item;
        })
        
        array[array.length] = firstElement;
        
        return array
    }
}