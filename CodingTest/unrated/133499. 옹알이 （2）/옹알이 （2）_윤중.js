function solution(babbling) {
    var sound = ['aya', 'ye', 'woo', 'ma'];    
    
    for (let i = 0; i < babbling.length; i++) {
        for (let j = 0; j < sound.length; j++) {
            if (babbling[i].includes(sound[j]) && !babbling[i].includes(sound[j].repeat(2))) {
                babbling[i] = babbling[i].replaceAll(sound[j], '1');
                }
            }
        }
    
    let answer = babbling.filter((e) => {
        for (let i = 0; i < e.length; i++) {
            if (e[i] !== '1') return false;
            }
        return true;
        });
    return answer.length;
}