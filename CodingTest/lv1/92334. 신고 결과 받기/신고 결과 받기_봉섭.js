function solution(id_list, report, k) {
  let warnCount = [];
  let idInfor = [];
  let answer = [];

  //회원 정보 객체를 담은 리스트 생성
  for (const id of id_list) {
    idInfor[id] = { repTo: [], repBy: [], ban: false, mail: 0 };
  }

  //신고 대상과 신고 당항한 대상 배열 추가
  for (const reporter of [...new Set(report)]) {
    let [rep, def] = reporter.split(" ");
    idInfor[rep].repTo.push(def);
    idInfor[def].repBy.push(rep);
  }
  // 신공 당한 대상의 배열의 길이가 k 보다 이상인 경우 ban을 true로
  for (const id of id_list) {
    idInfor[id].repBy.length >= k ? (idInfor[id].ban = true) : (idInfor[id].ban = false);
  }

  for (const rep of id_list) {
    for (const def of id_list) {
      if (idInfor[def].ban === true) {
        idInfor[rep].repTo.includes(def) ? (idInfor[rep].mail += 1) : (idInfor[rep].mail += 0);
      }
    }
  }

 

  for (const id of id_list) {
    answer.push(idInfor[id].mail);
  }
  return answer;
}