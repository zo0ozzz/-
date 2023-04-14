function solution(n) {
    return (n + '').split('').reduce((acc, elem) => {
        return acc + parseInt(elem)
    }, 0)
}