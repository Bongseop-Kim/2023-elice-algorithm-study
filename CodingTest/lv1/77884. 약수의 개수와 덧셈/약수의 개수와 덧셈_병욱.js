function solution(left, right) {
    var answer = 0;
    for(let i=left; i<=right; i++){
        console.log(divisor_num(i));
        if(divisor_num(i)%1!==0){
            answer+=i;
        }
        else{
            answer-=i;
        }
    }
    return answer;
}

function divisor_num(num){
    return Math.sqrt(num);
}