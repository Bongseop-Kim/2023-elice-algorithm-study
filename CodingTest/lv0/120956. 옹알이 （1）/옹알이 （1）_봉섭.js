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

  console.log(newArray);
  console.log(babbling);

  for (let i = 0; i < newArray.length; i++) {
    newArray[i].length === babbling[i].length ? (answer += 1) : "";
  }

  return answer;
}
