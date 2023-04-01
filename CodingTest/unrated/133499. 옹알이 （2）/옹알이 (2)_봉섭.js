function solution(babbling) {
  var answer = 0;
  let split = [];
  let spare = [];

  babbling.map((arg) => {
    split.push(arg.split(""));
    spare.push("");
  });

  let stack = "";

  for (let i = 0; i < split.length; i++) {
    for (let j = 0; j < split[i].length; j++) {
      switch (split[i][j]) {
        case "a":
          stack = split[i][j] + split[i][j + 1] + split[i][j + 2];
          if (stack === "aya") {
            if (split[i][j + 3] + split[i][j + 4] + split[i][j + 5] === "aya") {
              break;
            }
            spare[i] += stack;
            stack = "";
            j++;
            j++;
          }
          break;
        case "w":
          stack = split[i][j] + split[i][j + 1] + split[i][j + 2];
          if (stack === "woo") {
            if (split[i][j + 3] + split[i][j + 4] + split[i][j + 5] === "woo") {
              break;
            }
            spare[i] += stack;
            stack = "";
            j++;
            j++;
          }
          break;
        case "y":
          stack = split[i][j] + split[i][j + 1];
          if (stack === "ye") {
            if (split[i][j + 2] + split[i][j + 3] === "ye") {
              break;
            }
            spare[i] += stack;
            stack = "";
            j++;
          }
          break;
        case "m":
          stack = split[i][j] + split[i][j + 1];
          if (stack === "ma") {
            if (split[i][j + 2] + split[i][j + 3] === "ma") {
              break;
            }
            spare[i] += stack;
            stack = "";
            j++;
          }
          break;
      }
    }
  }

  for (let i = 0; i < babbling.length; i++) {
    if (babbling[i] === spare[i]) {
      answer += 1;
    }
  }
  return answer;
}

console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa", "ayayeayayeayaaya"]));
