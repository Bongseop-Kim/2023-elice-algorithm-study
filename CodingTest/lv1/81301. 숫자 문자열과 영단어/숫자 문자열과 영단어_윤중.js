function solution(s) {
    let num = {
        'zero' : '0', 'one' : '1', 'two' : '2', 'three' : '3', 'four' : '4',
        'five' : '5', 'six' : '6', 'seven' : '7', 'eight' : '8', 'nine' : '9'
    }
    
    let num_key = Object.keys(num)
    let num_value = Object.values(num)
    
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < num_key.length; j++) {
            s = s.replace(num_key[j], num_value[j]);
        }
    }
    return parseInt(s);
}