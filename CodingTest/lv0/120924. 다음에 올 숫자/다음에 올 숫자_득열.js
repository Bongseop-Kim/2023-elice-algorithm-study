function solution(common) {
  let length = common.length;
  let sub = common[1] - common[0];
  let standard = common[1];

  if (standard + sub === common[2]) { // 등차 수열
    return common[length - 1] + sub;
  } else { // 등비 수열
    sub = common[1] / common[0]; // sub 변수 수정
    return common[length - 1] * sub;
  }
}