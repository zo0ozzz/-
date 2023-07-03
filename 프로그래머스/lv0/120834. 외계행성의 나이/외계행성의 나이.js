function solution(age) {
    var answer = '';
    
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    
    const ageArray = age.toString().split('');
    
    const parsedArray = ageArray.map(item => {
        const index = parseInt(item);
        
        return alphabet[index];
    })
    
    return parsedArray.join('')
}