function solution(polynomial) {
    let x = 0;
    let y = 0;
    
    for(item of polynomial.split(' + ')) {
        if(/x/.test(item)) {
            if(item === 'x') {
                x += 1;
            }
            else {
                const plus = item.replace('x', '')
                
                x += +plus
            }
        }
        else {
            y += +item
        }
    }
    
    if(x !== 0 && y !== 0) {
        if(x === 1) {
            return `x + ${y}`;
        }
        else {
            return `${x}x + ${y}`;    
        }
    }
    
    if(x === 0) {
        return y.toString()
    }
    
    if(y === 0) {
        if(x === 1) {
            return 'x';
        }
        else {
            return `${x}x`        
        }
    }
    
}