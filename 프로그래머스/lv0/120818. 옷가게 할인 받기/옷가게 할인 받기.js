function solution(price) {
    // 총 가격을 분기.
    // 각 분기 상황에 대해 할인율 적용.
    
    if(price < 100000) {
        return price;
    }
    
    if(price >= 100000 && price < 300000) {
        return Math.floor(price * 0.95);
    }
    
    if(price >= 300000 && price < 500000) {
        return Math.floor(price * 0.9);
    }
    
    if(price >= 500000) {
        return Math.floor(price * 0.8);
    }
}