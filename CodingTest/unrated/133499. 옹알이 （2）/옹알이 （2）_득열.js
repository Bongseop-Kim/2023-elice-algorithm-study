function solution(babbling) {
    let result = 0;
    const speak = ['aya', 'ye', 'woo', 'ma'];
        for(let i = 0; i < babbling.length; i++) {
            let b = babbling[i];
            
            for(let j = 0; j < speak.length; j++) {
                let s = speak[j];
                
                // 이 애기는 같은 발음을 연속으로 할 수 없기에, 문자열 b에 s값이 두 번 연속으로 있을 경우 break
                // 위의 경우가 아닌 경우 문자열 b의 s값을 공백으로 바꾸고 join으로 합침
                if(b.includes(s.repeat(2))) {
                    break;
                } else {    
                    b = b.split(s).join(' ');
                }
            }
            
            // b 값에 공백 부분을 제거한 문자열의 길이가 0일 경우 result 값을 반환
            if(b.split(' ').join('').length == 0) {
                result++;
            }
        }
    return result;
}