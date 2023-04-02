function solution(my_string) {
    const numbers = [];
    let currentNumber = '';
    
    for (let i = 0; i < my_string.length; i++) {
        const char = my_string[i];

        // char 값이 숫자일 경우 currentNumber 변수에 추가
        if (char >= '0' && char <= '9') {
            currentNumber += char;
        // 다음 값에 문자를 만났을 경우 숫자 값(currentNumbers 값을 Numbers 배열에 추가)
        } else if (currentNumber !== '') {
            numbers.push(Number(currentNumber));
            currentNumber = ''; // 초기화
        }
    }
    
    // 마지막 값이 문자가 아닐 경우를 위한 조건문
    if (currentNumber !== '') { 
        numbers.push(Number(currentNumber)); 
    }
    
    let sum = 0
    for (let j = 0; j < numbers.length; j++) {
        sum += numbers[j];
    }
    
    return sum;
}