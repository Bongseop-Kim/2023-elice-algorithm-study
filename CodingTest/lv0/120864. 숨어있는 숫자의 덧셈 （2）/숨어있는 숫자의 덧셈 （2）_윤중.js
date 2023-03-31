function solution(my_string) {
    var answer = 0;
    const n = ['1','2','3','4','5','6','7','8','9','0']
    let s = '';
    
    for (let i = 0; i < my_string.length; i++) {
        for (let j = 0; j < n.length; j++) {
            if (my_string.charAt(i) === n[j]) {
                s += my_string.charAt(i);
                if (!n.includes(my_string.charAt(i+1))) {
                    answer += parseInt(s);
                    s = '';
                }
        }
    }
    }
    return answer;
}
