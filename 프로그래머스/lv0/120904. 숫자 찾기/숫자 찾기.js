function solution(num, k) {
    const isK = ('' + num).indexOf(k);
    
    return isK === -1 ? -1 : isK + 1;
    
//     const regex = new RegExp(k);
    
//     const match = num.toString().match(regex);
    
//     return match ? match.index + 1 : -1;

//     if(num.toString().split('').indexOf(k.toString()) === -1) {
//         return -1;
//     }
    
//     return num.toString().split('').indexOf(k.toString()) + 1

}