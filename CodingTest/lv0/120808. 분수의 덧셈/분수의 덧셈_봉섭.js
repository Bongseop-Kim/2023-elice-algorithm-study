function solution(numer1, denom1, numer2, denom2) {
    
    var answer = [];
    let top = numer1*denom2 +numer2*denom1;
    let bot = denom1*denom2;
    let max = 1;
    
    for(let i=0;i<=top;i++){
        if(top%i===0 && bot%i===0){
            max =i;
        }
    }
    answer = [top/max,bot/max]
    
    return answer;
}