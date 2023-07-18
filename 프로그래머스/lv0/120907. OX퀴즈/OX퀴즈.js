function solution(quiz) {
    return quiz.reduce((acc, cur) => {
        const arr = cur.split(' ');
    
        let converter = '';
        
        if(arr[1] === '+') {
            converter = 1;
        }

        if(arr[1] === '-') {
            converter = -1;
        }

        acc.push(+arr[0] + converter * +arr[2] === +arr[4] ? 'O' : 'X');
        
        return acc;
    }, [])
}