function solution(id_pw, db) {
    answer = ""
    for(i of db){
        if(i[0]===id_pw[0] && i[1]===id_pw[1]){
           answer = "login"
            break
           }
        else if(i[0]===id_pw[0] && i[1]!==id_pw[1]){
           answer = "wrong pw";
            break
           }
        else{
            answer = "fail";
        }
    }
        
    return answer;
}