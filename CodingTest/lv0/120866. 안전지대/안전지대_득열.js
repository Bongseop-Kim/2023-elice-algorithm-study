function solution(board) {
    const outside = [[-1,-1],[-1,0],[-1,1],[0,1],[1,1],[1,0] ,[1,-1],[0,-1]]; // 인접한 8칸의 값을 정의함
    let safe = 0;

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] === 1) {
            for (let k = 0; k < outside.length; k++) {
                let x = outside[k][0];
                let y = outside[k][1];
                let nx = i + x;
                let ny = j + y;
                
                // nx, ny의 배열 값이 배열의 범위를 벗어 나는지 추가하는 조건 및
                // 1 값이 인접해 있을 때 예외 처리
                if (nx >= 0 &&
                    nx < board.length &&
                    ny >= 0 &&
                    ny < board.length &&
                    board[nx][ny] !== 1) {
                        board[nx][ny] = 2;
                    }
                }
            } 
        }
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] === 2) {
            board[i][j] = 1;
            }
        }
    }
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] == 0) {
                safe++
            }
        }
    }
    console.log(board)
    return safe
}

console.log(solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0]
    ])
);

console.log(solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0], 
    [0, 0, 1, 1, 0], 
    [0, 0, 0, 0, 0]]))