
//케이스 1번 오류로 답을 찾는 중입니다.
function solution(id_pw, db) {
    var answer = '';    
    let id = id_pw[0]
    let pw = id_pw[1]
    for(let i= 0;i<=db.length-1;i++){
        id === db[i][0] && pw ===db[i][1]? answer = 'login':
        id === db[i][0] && pw !==db[i][1]? answer = 'wrong pw':
        id !== db[i][0]? answer= 'fail':"fail"
    }
    return answer;
}