function solution(dot) {
   var answer = 0;
    dot[0] >0 && dot[1] >0 ?  answer =1
    :  dot[0] <0 &&dot[1] >0 ?  answer =2
    :  dot[0] <0 &&dot[1] <0 ?  answer =3
    : dot[0] >0 &&dot[1] <0 ?  answer =4
    :null
    return answer;
}