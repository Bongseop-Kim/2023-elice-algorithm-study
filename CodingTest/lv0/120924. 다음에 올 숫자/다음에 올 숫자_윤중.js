function solution(common) {
    let a = common
    if ( a[2] - a[1] === a[1] - a[0]) {
        return a[a.length - 1] + (a[1] - a[0]);
    }
    else if (a[0] < a[1]) {
        return a[a.length-1] * a[1]/a[0];
    }
    else if (a[0] > a[1]) {
        return a[a.length-1] / (a[0]/a[1]);
    }
}