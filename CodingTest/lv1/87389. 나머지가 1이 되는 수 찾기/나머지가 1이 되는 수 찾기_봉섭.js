function solution(n) {
  var answer = n;
  for (let i = n; i > 1; i--) {
    if (n % i === 1 && i < answer) {
      answer = i;
    }
  }
  return answer;
}