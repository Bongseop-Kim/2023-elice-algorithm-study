function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    
    answer.push(numer1*denom2 + numer2*denom1);
    answer.push(denom1*denom2);
    
    for ( let i = denom1*denom2; i > 1; i-- ) {
        if ( (numer1*denom2 + numer2*denom1) % i === 0 && denom1*denom2 % i === 0 ) {
            answer[0] = (numer1*denom2 + numer2*denom1)/i;
            answer[1] = denom1*denom2/i;
            
            break;
        }
    }
    return answer;
}