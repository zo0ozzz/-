function solution(n, words) {    
    // 1 끝말잇기
    let index1;

    for(let i = 0; i < words.length - 1; i++) {
        const left = words[i];
        const right = words[i + 1];
        
        if(left[left.length - 1] !== right[0]) {
            index1 = i + 1;
                           
            break;       
        }
    }
    
    // 2 중복 단어 출현
    
    let arr = [];
    
//     first: for (let i = 0; i < words.length - 1; i++) {
//       for (let j = i + 1; j < words.length; j++) {
//         if (words[i] === words[j]) {
//           index2 = j;

//           break first;
//         }
//       }
//     }

    for (let i = 0; i < words.length - 1; i++) {
      for (let j = i + 1; j < words.length; j++) {
        if (words[i] === words[j]) {
          arr.push(j);
            
          break;
        }
      }
    }
    
    const index2 = arr.length === 0 ? undefined : Math.min(...arr);

    if(!index1 && !index2) {
        return [0, 0]
    }
    
    if(!index1 && index2) {
        return whoWhen(n, index2);
    }
    
    if(index1 && !index2) {
        return whoWhen(n, index1)
    }
    
    if(index1 && index2) {
        const result = [index1, index2].sort((a, b) => a - b)[0];
        
        return whoWhen(n, result)
    }
}

function whoWhen(n, index) {
    const num = index + 1;
    
    const who = (num % n) || n;
    const when = Math.ceil(num/ n)
    
    return [who, when];    
}
