function solution(numbers) {
    let a = numbers.sort((a,b) => {
        return b - a ;
    });
    return numbers[0]*numbers[1];
}