function solution(board) {
    let answer = 0;
    // 깉은 복사 검색..
    let b = board.map(arr => arr.slice());
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            // board = [[1]]
            if (board[0][0] === 1 ) {
                return 0;
            }
            // 각 모서리 [1,0,0,0,1]
            //          [0,0,0,0,0]
            //          [0,0,0,0,0]
            //          [0,0,0,0,0]
            //          [1,0,0,0,1]
            else if (board[i][j] === 1 && i === 0 && j === 0) {
                b[1][0] = b[1][1] = b[0][1] = 1;
                board[i][j] = 0;
            } else if (board[i][j] === 1 && i === 0 && j === board[i].length - 1) {
                b[0][board[i].length - 2] = b[1][board[i].length - 2] = b[1][board[i].length - 1] = 1;
                board[i][j] = 0;
            } else if (board[i][j] === 1 && i === board.length - 1 && j === 0) {
                b[board.length - 2][0] = b[board.length - 2][1] = b[board.length - 1][1] = 1;
                board[i][j] = 0;
            } else if (board[i][j] === 1 && i === board.length - 1 && j === board[i].length - 1) {
                b[board.length - 2][board[i].length - 1] = b[board.length - 2][board[i].length - 2] 
                    = b[board.length - 1][board[i].length - 2] = 1;
                board[i][j] = 0;
                // 각 변  [0,1,1,1,0]
                //       [1,0,0,0,1]
                //       [1,0,0,0,1]
                //       [1,0,0,0,1]
                //       [0,1,1,1,0]
            } else if (board[i][j] === 1 && i === 0 && j !== 0 && j !== board[i].length - 1) {
                b[i][j-1] = b[i][j+1] = b[i+1][j-1] = b[i+1][j] = b[i+1][j+1] = 1;
                board[i][j] = 0;
            } else if (board[i][j] === 1 && i === board.length - 1 && j !== 0 && j !== board[i].length - 1) {
                b[i-1][j-1] = b[i-1][j] = b[i-1][j+1] = b[i][j-1] = b[i][j+1] = 1;
                board[i][j] = 0;
            } else if (board[i][j] === 1 && j === 0 && i !== board.length - 1 && i !== 0) {
                b[i-1][j] = b[i-1][j+1] = b[i][j+1] = b[i+1][j] = b[i+1][j+1] = 1;
                board[i][j] = 0;
            } else if (board[i][j] === 1 && j === board[i].length - 1 && i !== board.length - 1 && i !== 0) {
                b[i-1][j-1] = b[i-1][j] = b[i][j-1] = b[i+1][j-1] = b[i+1][j] = 1;
                board[i][j] = 0;
                // 통상
            } else if (board[i][j] === 1) {
                b[i-1][j-1] = b[i-1][j] = b[i-1][j+1] = b[i][j-1]
                = b[i][j+1] = b[i+1][j-1] = b[i+1][j] = b[i+1][j+1] = 1;
                board[i][j] = 0;
            }
        }
    }
    
    for (let i = 0; i < b.length; i++) {
        for (let j = 0; j < b[i].length; j++) {
            answer += b[i][j] === 0 ? 1 : 0;
        }
    }
    return answer;
}
