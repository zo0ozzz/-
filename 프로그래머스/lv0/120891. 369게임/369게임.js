function solution(order) {

    const arr = order.toString().match(/[369]/g);
    console.log(arr);
    
    return arr ? arr.length : 0;
}