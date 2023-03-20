function solution(numer1, denom1, numer2, denom2) {
    // 1. 두 분모의 곱을 공통 분모로 하여 값을 계산한다.
    let numerator = numer1 * denom2 + numer2 * denom1;
    let denominator = denom1 * denom2;

    // 2. 분자와 분모의 최대공약수를 구하여 값을 나눈다.
    const getGCD = (a, b) => (b ? getGCD(b, a % b) : a);
    const gcd = getGCD(numerator, denominator);
    numerator /= gcd;
    denominator /= gcd;

    return [numerator, denominator];
}