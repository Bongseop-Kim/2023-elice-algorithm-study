function solution(price, money, count) {
  var profit = money;
  for (let i = 1; i <= count; i++) {
    profit -= price * i;
  }

  if (profit < 0) {
    return Math.abs(profit);
  } else {
    return 0;
  }
}