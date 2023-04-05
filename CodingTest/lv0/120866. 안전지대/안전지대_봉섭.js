function solution(board) {
  var answer = 0;
  let bombs = [];
  const w = board.length;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) bombs.push([i, j]);
    }
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      bombs.map((arg) => {
        if ((arg[0] - 1 + i >= 0) & (arg[0] - 1 + i < w)) {
          if (board[arg[0] - 1 + i][arg[1] - 1 + j] === 0) {
            board[arg[0] - 1 + i][arg[1] - 1 + j] = "X";
          }
        }
      });
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 0) answer += 1;
    }
  }

  console.log(board.flat().filter(e => e === 0))
  return answer;
}
