function solution(s1, s2) {
    var answer = 0;
    s1.forEach((item)=>{
        s2.forEach((item2)=>{
            item === item2 ? answer++:answer
        })
    })
    return answer;
}

// function solution(s1, s2) {
//   let answer = 0;
//   s1.forEach((item) => {
//     if (s2.includes(item)) {
//       answer++;
//     }
//   });
//   return answer;
// }