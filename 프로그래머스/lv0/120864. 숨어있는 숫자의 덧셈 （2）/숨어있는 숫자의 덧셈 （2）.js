function solution(my_string) {
    const arr = my_string.match(/\d+/g);

    return arr !== null ? arr.reduce((acc, cur) => acc + +cur, 0) : 0;
}