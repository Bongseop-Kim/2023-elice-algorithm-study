function solution(babbling) {
  var answer = 0;
  const ican = ["aya", "ye", "woo", "ma"];
  const newArray = babbling.map((arg) => "");

  const func = (arg, a, j) => {
    if (arg.match(a)) {
      newArray[j] += a;
    } else {
      newArray[j] += "";
    }
  };

  babbling.map((str, j) => {
    for (const a of ican) {
      func(str, a, j);
    }
  });

  for (let i = 0; i < newArray.length; i++) {
    newArray[i].length === babbling[i].length ? (answer += 1) : "";
  }

  return answer;
}

console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]));

function firstsolution(babbling) {
  const ican = ["aya", "ye", "woo", "ma"];
  var answer = 0;
  const func = (arg, i) => {
    if (arg.match(ican[i])) {
      return arg.replace(ican[i], "");
    } else {
      return arg;
    }
  };

  const newArray = babbling
    .map((str) => func(str, 0))
    .map((str) => func(str, 1))
    .map((str) => func(str, 2))
    .map((str) => func(str, 3));
  for (const a of newArray) {
    if (a.length === 0) {
      answer += 1;
    }
  }

  return answer;
}
