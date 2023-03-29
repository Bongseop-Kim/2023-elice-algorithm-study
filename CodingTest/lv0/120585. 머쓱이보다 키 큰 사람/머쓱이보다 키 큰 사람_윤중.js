function solution(array, height) {
    var answer = 0;
    array.forEach((e) => {
        if (height < e) answer += 1;
    });
    return answer;
}
