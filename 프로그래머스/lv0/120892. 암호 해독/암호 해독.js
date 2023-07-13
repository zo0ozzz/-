function solution(cipher, code) {
    let real = [];
    
    let i = 1;
    
    while(code * i <= cipher.length) {
        real.push(cipher[code * i - 1])
        
        i++
    }
    
    return real.join('');
}