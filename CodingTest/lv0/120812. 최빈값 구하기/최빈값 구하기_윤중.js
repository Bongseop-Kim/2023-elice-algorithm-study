function solution(array) {
    var answer = [];
    for (let i = 0; i < array.length; i++) {
            if (!answer.includes(array[i])) answer.push(array[i]);
    }
    let a = [];
    let b = 0;
    for (let i = 0; i < answer.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (answer[i]===array[j]) b += 1;
        }
        a.push(b);
        b = 0;
    }
    let c = a.findIndex(e => e === Math.max(...a));
    if (answer.length===1) return answer[0];
    else if (a.sort((a,b) => b-a)[0]===a.sort((a,b) => b-a)[1]) return -1;
    return answer[c];
}