function solution(s) {
    const arrayS = s.split(' ');
    
    let calculated = 0;
    
    arrayS.forEach((item, index) => {
        if(item === 'Z') {
            calculated -= parseInt(arrayS[index - 1]); 
        } else {
            calculated += parseInt(item); 
        }
    })
    
    return calculated;
}