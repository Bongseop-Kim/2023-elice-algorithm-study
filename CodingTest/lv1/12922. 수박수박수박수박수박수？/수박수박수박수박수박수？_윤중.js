function solution(n) {
    var answer = '수박';
    return (n % 2 === 0 ? 
        answer = answer.repeat(n/2) : answer = answer.repeat((n - 1)/2)+'수');
}