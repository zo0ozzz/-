function solution(n){
    // 최대한 순간이동을 많이 하게.
    // n이 2의 배수라면 무조건 순간이동이 유리함.
    // n이 2의 배수가 아니라면 (n - 1) / 2까지는 점프로 도달 후 순간이동.
    
    let jumpCount = 0;
    
    while(n !== 1) {
        if(n % 2 === 0) {
            n = n / 2;
        }
        else if(n % 2 !== 0) {
            jumpCount++
            n = (n - 1) / 2;
        }
        
    }
    
    return jumpCount + 1
}