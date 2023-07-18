function solution(array) {
      function count(element) {
    let count = 0;

    for (item of array) {
      if (item === element) {
        count++;
      }
    }

    return count;
  }

  const unique = [...new Set(array)];

  const sorted = unique.sort((a, b) => count(b) - count(a));

  if (count(sorted[0]) === count(sorted[1])) {
    return -1;
  }

  return sorted[0];
    
//     if(array.length === 1) {
//         return array[0];
//     }
    
//   const unique = [...new Set(array)];
//     if(unique.length === 1) {
//         return unique[0];
//     }

//   const newArray = unique.map((ite) => {
//     let count = 0;

//     for (i = 0; i < array.length; i++) {
//       if (item === array[i]) {
//         count++;
//       }
//     }

//     return [item, count];
//   });

//   const copy = [...newArray];

//   copy.sort((first, second) => {

//     return second[1] - first[1];
//   });
    
//     if(copy[0][1] === copy[1][1]) {
//         return -1;
//     }
//     else {
//         return copy[0][0]
//     }
}