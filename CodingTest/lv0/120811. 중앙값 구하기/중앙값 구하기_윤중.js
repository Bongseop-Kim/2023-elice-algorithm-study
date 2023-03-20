function solution(array) {
    let an = array.sort((a, b) => a-b);
    let answer = an[(array.length-1)/2]
    return answer;
}