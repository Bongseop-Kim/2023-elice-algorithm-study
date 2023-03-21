function solution(n) {
    var answer= 0;
    for(i=2; i<=n; i++){
        if(i%2===0){
            answer=answer+i;
        }
    }
    
    return answer;
}