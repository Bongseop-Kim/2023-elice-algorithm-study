function solution(n) {
    let W_M =""
    for(let i = 0 ; i<n; i++){
        i%2==0 ? W_M+="수":W_M+="박"
    }
    return W_M;
}