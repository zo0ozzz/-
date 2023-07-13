function solution(my_string) { 
    let converted = '';
    
    for(item of my_string) {
        if(item === item.toUpperCase()) {
            converted += item.toLowerCase();   
        }
        else {
            converted += item.toUpperCase();   
        }
    }
    
    return converted;
    
    // return my_string.replace(/./g, item => /[A-Z]/.test(item) ? item.toLowerCase() : item.toUpperCase())
}