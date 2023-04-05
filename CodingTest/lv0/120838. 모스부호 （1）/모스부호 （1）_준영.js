function solution(letter) {
    var answer = '';
    let morse = letter.split(" ")
    console.log(morse)
    for(let i = 0;i<= morse.length-1;i++) {
        morse[i] ==='.-'? answer += 'a':
        morse[i] ==='-...'? answer += 'b':
        morse[i] ==='-.-.'? answer += 'c':  
        morse[i] ==='-..'? answer += 'd':
        morse[i] ==='.'? answer += 'e':
        morse[i] ==='..-.'? answer += 'f':
        morse[i] ==='--.'? answer += 'g':
        morse[i] ==='....'? answer += 'h':
        morse[i] ==='..'? answer += 'i':
        morse[i] ==='.---'? answer += 'j':
        morse[i] ==='-.-'? answer += 'k':
        morse[i] ==='.-..'? answer += 'l':
        morse[i] ==='--'? answer += 'm':
        morse[i] ==='-.'? answer += 'n':
        morse[i] ==='---'? answer += 'o':
        morse[i] ==='.--.'? answer += 'p':
        morse[i] ==='--.-'? answer += 'q':
        morse[i] ==='.-.'? answer += 'r':
        morse[i] ==='...'? answer += 's':
        morse[i] ==='-'? answer += 't':
        morse[i] ==='..-'? answer += 'u':
        morse[i] ==='...-'? answer += 'v':
        morse[i] ==='.--'? answer += 'w':
        morse[i] ==='-..-'? answer += 'x':
        morse[i] ==='-.--'? answer += 'y':
        morse[i] ==='--..'? answer += 'z':null;}
    
     
      

    return answer;
    
}
solution(".--. -.-- - .... --- -.")