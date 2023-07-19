function solution(my_string) {
    return [...my_string.toLowerCase()].sort().join('');
    
//     return [...my_string].sort((a, b) => {
//         if(a.toLowerCase() < b.toLowerCase()) {
//             return -1;
//         }
//         else if(a.toLowerCase() === b.toLowerCase()) {
//             return 0;
//         }
//         else {
//             return 1;
//         }
//     }).reduce((acc, cur) => acc + (cur.toLowerCase() === cur ? cur : cur.toLowerCase()), '');
    
//     return my_string.replace(/[A-Z]/g, item => item.toLowerCase()).split('').sort().join('');
}