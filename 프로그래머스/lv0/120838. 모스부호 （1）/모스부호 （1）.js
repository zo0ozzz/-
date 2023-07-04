function solution(letter) {
    var answer = '';
    
    morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
    }
    
    const letterArray = letter.split(' ');
    
    const parsedString = letterArray.reduce((acc, item) => {
        acc += morse[item];
        
        return acc;
    }, '')

    return parsedString;
    
//     const letterArray = letter.split(' ');
    
//     const parsedString = letterArray.reduce((acc, item) => {
//         for(key in morse) {
//             if(item === key) {
//                 acc += morse[key]
//             }
//         } 
        
//         return acc;
//     }, '')
    
//     return parsedString;
    
//     const parsedArray = letterArray.map(item => {
//     for(key in morse) {
//         if(item === key) {
//             return morse[key]
//         }
//     }
//     })
    
//     return parsedArray.join('')

//     let morseArray = [];
//     let alphabetArray = [];
    
//     for(key in morse) {
//         morseArray.push(key)
//         alphabetArray.push(morse[key])
//     }
    
//     let indexArray = [];
//     letterArray.map((item1, index1) => {
//         morseArray.forEach((item2, index2) => {
//             if(item1 === item2) {
//                 indexArray[index1] = index2;
//             }
//         })
//     })
    
//     const resultArray = indexArray.map(index => {
//         return alphabetArray[index]
//     })
    
//     return resultArray.join('')
}