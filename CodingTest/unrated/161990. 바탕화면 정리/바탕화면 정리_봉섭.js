function solution(wallpaper) {
  let answer = [0, 0, 0, 0];
  let x = [];
  let y = [];
  let lux, luy, rdx, rdy;

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i].split("")[j] === "#") {
        console.log(`i=${i}, j=${j}`);
        x.push(i);
        y.push(j);
      }
    }
  }

  console.log(x, y);
  lux = Math.min(...x);
  luy = Math.min(...y);
  rdx = Math.max(...x) + 1;
  rdy = Math.max(...y) + 1;
  console.log(lux, luy, rdx, rdy);
  answer = [lux, luy, rdx, rdy];

  return answer;
}