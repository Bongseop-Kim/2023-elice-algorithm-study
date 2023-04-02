function solution(park, routes) {
  var start = [];
  for (let i = 0; i < park.length; i++) {
      if (park[i].includes('S')) {
          start.push(i);
          start.push(park[i].indexOf('S'));
          break;
      }
  }

  for (let i = 0; i < routes.length; i++) {
      const direction = routes[i].charAt(0);
      const number = parseInt(routes[i].charAt(2));

      if (direction === 'E' && start[1] + number < park[start[0]].length &&
         !park[start[0]].slice(start[1], start[1] + number + 1).includes('X')) {
           start[1] += number;
            }
      else if (direction === 'W' && start[1] - number >= 0 &&
              !park[start[0]].slice(start[1] - number, start[1] + 1).includes('X')) {
            start[1] -= number;
        }
      else if (direction === 'N' && start[0] - number >= 0) {
            var arr = [];
            for (let j = start[0] - number; j <= start[0]; j++) {
                arr.push(park[j].charAt(start[1]));
            }
            if (!arr.includes('X')) {
                start[0] -= number;
            }
      }
      else if (direction === 'S' && start[0] + number < park.length) {
            var arr = [];
            for (let j = start[0]; j <= start[0] + number; j++) {
                arr.push(park[j].charAt(start[1]));
            }
            if (!arr.includes('X')) {
                start[0] += number;
            }
        }
    }
  return start;
}