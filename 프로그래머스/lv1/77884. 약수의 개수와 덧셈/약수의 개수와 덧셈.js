function solution(left, right) {
    var answer = 0;
    for(let i=left; i<=right; i++){
        console.log(divisor_num(i));
        if(divisor_num(i)%2===0){
            answer+=i;
        }
        else{
            answer-=i;
        }
    }
    return answer;
}

function divisor_num(num){
    let count=0;
    for(let i = 1; i<=num; i++){
        if(num%i===0){
            count++;
        }
    }
    return count;
}