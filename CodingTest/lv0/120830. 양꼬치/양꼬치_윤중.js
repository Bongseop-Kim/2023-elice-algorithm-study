function solution(n, k) {
    if ( n > 9 ) return 12000*n + 2000*(k-parseInt(n/10));
    else return 12000*n + 2000*k
}