function solution(my_string) {
  const arr = my_string.split("").map((arg) => {
    if (!isNaN(arg)) {
      return Number(arg);
    }
  });
  let answer = 0;
  let tempNums = "";
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      tempNums += arr[i];
    } else if (tempNums !== "") {
      console.log("a");
      answer += Number(tempNums);
      tempNums = "";
    }
  }

  return answer + tempNums * 1;
}