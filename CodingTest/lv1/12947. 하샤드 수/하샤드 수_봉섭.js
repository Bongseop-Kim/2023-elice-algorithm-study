function solution(x) {
  var answer = false;
  const hashard = String(x)
    .split("")
    .reduce((acc, cur) => acc + cur * 1, 0);
  if (x % hashard === 0) {
    answer = true;
  }
  return answer;
}