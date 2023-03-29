function solution(s) {
  var answer = s;
  const num = [
    ["zero", "0"],
    ["one", "1"],
    ["two", "2"],
    ["three", "3"],
    ["four", "4"],
    ["five", "5"],
    ["six", "6"],
    ["seven", "7"],
    ["eight", "8"],
    ["nine", "9"],
  ];
  for (const a of num) {
    answer = answer.replace(a[0], a[1]);
  }
  return parseInt(answer);
}

console.log(solution("2three45sixseven"));
