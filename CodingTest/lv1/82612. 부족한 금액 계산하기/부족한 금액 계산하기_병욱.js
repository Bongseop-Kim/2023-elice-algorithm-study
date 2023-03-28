function solution(price, money, count) {
    let result =0;
    result=price*count*(count+1)/2-money;
    if(result>0){
        return result;
    }
    else{
        return 0;
    }
}