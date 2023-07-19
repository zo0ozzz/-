function solution(my_string) {
    return my_string.replace(/[A-Z]/g, item => item.toLowerCase()).split('').sort().join('');
}