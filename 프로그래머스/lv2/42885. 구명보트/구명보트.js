function solution(people, limit) {
//     people.sort((a, b) => a - b);
    
//     let sum = 0;
    
//     const boats = people.reduce((acc, item) => {
//         sum += item;
        
//         if(sum > limit) {
//             sum = item;
            
//             acc++
//         }
        
//         return acc;
//     }, 1)
    
//     return boats;
    
//     people.sort((a, b) => a - b);
    
//     let boats = 0;
    
//     while(people.length >= 1) {
//         for(i = 1; i < people.length - 1; i++) {
//             if(limit - people[0] >= Math.min(...people)) {
//                if(people[0] + people[i] > limit) {
//                 people.splice(0, 1);
//                 people.splice(i - 1, 1);

//                 boats++
                   
//                 break;
//                 }
//             } else {
//                 people.splice(0, 1);

//                 boats++
//             }
//         }
//     }
    
//     let boats = 0;
    
//     const min = Math.min(...people);

//     let arr1 = [];
//     let arr2 = [];
    
//     for(item of people) {
//         if(item > limit - min) {
//             arr1.push(item);
            
//             boats++;
//         }
//         else {
//             arr2.push(item);
//         }
//     }
    
//     console.log(arr1, arr2, boats)
    
    people.sort((a, b) => a - b);
    
    let count = 0;
    
    while(people.length > 0) {
        if(people[0] + people[people.length - 1] <= limit) {
            people.shift();
            people.pop();
            
            count++
        }   
        else {
            people.pop();
            
            count++
        }
    }
    
    return count;
}