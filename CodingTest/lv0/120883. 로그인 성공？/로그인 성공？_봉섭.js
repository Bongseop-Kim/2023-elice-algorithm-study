function solution(id_pw, db) {
  let answer;
  for (const a of db) {
    if (id_pw[0] === a[0]) {
      if (id_pw[1] === a[1]) {
        return "login";
      } else answer = "wrong pw";
    }
  }

  if (answer) {
    return answer;
  } else {
    return "fail";
  }
  return answer;
}
