function solution(s) {
//     const str = s.toLowerCase().split(' ').reduce((acc, cur) => {
//         if(cur === '') {
//             cur = ' ';
//         }
//         else {
//             const reg = RegExp(cur[0]);
//             cur = cur.replace(reg, cur[0].toUpperCase());
//         }
    
//         acc = acc + (cur !== ' ' ? (' ' + cur) : cur); 
        
//         return acc;
//     }, '')
    
//     return str.replace(' ', '');
    
    return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
}