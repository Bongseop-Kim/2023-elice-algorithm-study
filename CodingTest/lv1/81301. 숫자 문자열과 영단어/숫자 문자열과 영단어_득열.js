function solution(s) {
    const alphabet = ['zero','one','two','three','four','five','six','seven','eight','nine']
    let answer = s;

    for (let i = 0; i < alphabet.length; i++) {
        let array = answer.split(alphabet[i]);
        answer = array.join(i);
    }

    return Number(answer);
}