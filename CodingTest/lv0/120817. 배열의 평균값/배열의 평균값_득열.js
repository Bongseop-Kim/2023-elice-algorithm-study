function solution(numbers) {
    let answer = 0;
    let ArrayCount = numbers.length;
    let ArraySum = 0;

    for (i = 0; i < numbers.length; i++) {
        ArraySum += numbers[i];
    }

    return ArraySum / ArrayCount;
}