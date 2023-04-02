function solution(before, routes) {
  let park = before;
  const h = park.length;
  const w = park[0].length;
  let position = [0, 0];
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (park[i][j] === "S") {
        position = [i, j];
      }
    }
  }
  let array = [];
  for (let i = 0; i < before.length; i++) {
    array.push(before[i].replace("S", "O"));
  }
  park = array;

  for (let i = 0; i < routes.length; i++) {
    const [dir, cnt] = routes[i].split(" ");
    let [y, x] = position;
    let bool = 0;

    // 이동 방향에 따라 새로운 위치 계산
    if (dir === "N") {
      for (let i = 1; i <= parseInt(cnt); i++) {
        if (y - i < h && park[y - i][x] === "O") {
          bool += 1;
        }
      }
      if (bool === parseInt(cnt)) {
        position = [y - parseInt(cnt), x];
      }
      bool = 0;
    } else if (dir === "S") {
      for (let i = 1; i <= parseInt(cnt); i++) {
        if (y + i < h && park[y + i][x] === "O") {
          bool += 1;
        }
      }
      if (bool === parseInt(cnt)) {
        position = [y + parseInt(cnt), x];
      }
      bool = 0;
    } else if (dir === "W") {
      for (let i = 1; i <= parseInt(cnt); i++) {
        if (x - i < w && park[y][x - i] === "O") {
          bool += 1;
        }
      }
      if (bool === parseInt(cnt)) {
        position = [y, x - parseInt(cnt)];
      }
      bool = 0;
    } else if (dir === "E") {
      for (let i = 1; i <= parseInt(cnt); i++) {
        if (x + i < w && park[y][x + i] === "O") {
          bool += 1;
        }
      }
      if (bool === parseInt(cnt)) {
        position = [y, x + parseInt(cnt)];
      }
      bool = 0;
    }
  }

  return position;
}

console.log(solution(["OSO", "OOO", "OXO", "OOO"], ["E 5", "S 7", "W 1"]));
