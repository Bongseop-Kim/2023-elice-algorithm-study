function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    let q = [];
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        q.push(j);
      }
    }
    console.log(q);
    if (q.length % 2 === 0) {
      answer += q[q.length - 1];
      q = [];
    } else {
      answer -= q[q.length - 1];
      q = [];
    }
  }

  return answer;
}