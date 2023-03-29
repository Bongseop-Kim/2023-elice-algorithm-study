function solution(price, money, count) {
    sum =0
    var answer = 0;
    for(let i = 1;i<=count;i++ ){
        sum +=price*i
    }
    return money-sum> 0 ? 0 : sum-money

    
}